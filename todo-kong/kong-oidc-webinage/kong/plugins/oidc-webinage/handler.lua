local BasePlugin = require "kong.plugins.base_plugin"
local OidcHandler = BasePlugin:extend()
local utils = require("kong.plugins.oidc-webinage.utils")
local filter = require("kong.plugins.oidc-webinage.filter")
local session = require("kong.plugins.oidc-webinage.session")

OidcHandler.PRIORITY = 1000


function OidcHandler:new()
  OidcHandler.super.new(self, "oidc")
end

function OidcHandler:access(config)
  OidcHandler.super.access(self)
  local oidcConfig = utils.get_options(config, ngx)

  if filter.shouldProcessRequest(oidcConfig) then
    session.configure(config)
    handle(oidcConfig, config)
  else
    ngx.log(ngx.DEBUG, "OidcHandler ignoring request, path: " .. ngx.var.request_uri)
  end

  ngx.log(ngx.DEBUG, "OidcHandler done")
end

function handle(oidcConfig, config)
  local response
  if oidcConfig.introspection_endpoint then
    response = introspect(oidcConfig)
    if response then
      utils.injectUser(response)
    end
  end

  if response == nil then
    response = make_oidc(oidcConfig, config)
    if response then
      if (response.user) then
        utils.injectUser(response.user)
      end
      if (response.access_token) then
        utils.injectAccessToken(response.access_token)
      end
      if (response.id_token) then
        utils.injectIDToken(response.id_token)
      end
    end
  end
end

function make_oidc(oidcConfig, config)
  if config.DO_NOT_REDIRECT == false then --Original case : redirect
    ngx.log(ngx.STDERR, "OidcHandler calling authenticate, requested path: " .. ngx.var.request_uri)
    local res, err, target_url, session = require("resty.openidc").authenticate(oidcConfig)
    if err then
      if oidcConfig.recovery_page_path then
        ngx.log(ngx.DEBUG, "Entering recovery page: " .. oidcConfig.recovery_page_path)
        ngx.redirect(oidcConfig.recovery_page_path)
      end
      utils.exit(500, err, ngx.HTTP_INTERNAL_SERVER_ERROR)
    end
    return res
  else -- Added case : do not redirect, but raise an error
    ngx.log(ngx.STDERR, "OidcHandler calling authenticate WITHOUT REDIRECTION, requested path: " .. ngx.var.request_uri)
    local res, err, target_url, session = require("resty.openidc").authenticate(oidcConfig, nil, "deny")
    if err then
      ngx.log(ngx.STDERR, "err : " .. err)
        utils.exit(ngx.HTTP_UNAUTHORIZED, err, ngx.HTTP_UNAUTHORIZED)
    end
    return res
  end
end

function introspect(oidcConfig)
  if utils.has_bearer_access_token() or oidcConfig.bearer_only == "yes" then
    local res, err = require("resty.openidc").introspect(oidcConfig)
    if err then
      if oidcConfig.bearer_only == "yes" then
        ngx.header["WWW-Authenticate"] = 'Bearer realm="' .. oidcConfig.realm .. '",error="' .. err .. '"'
        utils.exit(ngx.HTTP_UNAUTHORIZED, err, ngx.HTTP_UNAUTHORIZED)
      end
      return nil
    end
    ngx.log(ngx.DEBUG, "OidcHandler introspect succeeded, requested path: " .. ngx.var.request_uri)
    return res
  end
  return nil
end


return OidcHandler
