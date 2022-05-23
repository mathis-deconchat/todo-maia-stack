local typedefs = require "kong.db.schema.typedefs"

return {
  name = "oidc-webinage",
  fields = {
    { consumer = typedefs.no_consumer },
    { config = {
        type = "record",
        fields = {
          {client_id = { type = "string", required = true, default = "kong" },},
          {client_secret = { type = "string", required = true, default = "2407173c-3d29-4fc0-a980-803fcd000858" },},
          {discovery = { type = "string", required = true, default = "https://auth.webinage.net/auth/realms/horizon/.well-known/openid-configuration" },},
          {introspection_endpoint = { type = "string", required = false },},
          {timeout = { type = "number", required = false },},
          {introspection_endpoint_auth_method = { type = "string", required = false },},
          {bearer_only = { type = "string", required = true, default = "no" },},
          {realm = { type = "string", required = true, default = "horizon" },},
          {redirect_uri_path = { type = "string" },},
          {scope = { type = "string", required = true, default = "openid" },},
          {response_type = { type = "string", required = true, default = "code" },},
          {ssl_verify = { type = "string", required = true, default = "no" },},
          {token_endpoint_auth_method = { type = "string", required = true, default = "client_secret_post" },},
          {session_secret = { type = "string", required = false },},
          {recovery_page_path = { type = "string" },},
          {logout_path = { type = "string", required = false, default = '/logout' },},
          {redirect_after_logout_uri = { type = "string", required = false},},
          {filters = { type = "string" },},
          {DO_NOT_REDIRECT = { type = "boolean", required = false, default = false  },},
          {SESSION_CONTENTS_ID_TOKEN = { type = "boolean", required = false, default = true }},
          {SESSION_CONTENTS_ACCESS_TOKEN = { type = "boolean", required = false, default = false }},
          {SESSION_CONTENTS_USER = { type = "boolean", required = false, default = false }},
          -- {SESSION_CONTENTS = {  -- KONGA DOES NOT RETURN CORRECTLY WITH RECORD OR MAP  -> TRY WITH NEXT VERSION OF KONGA
          --   type = "map",
          --   keys = { type = "string" },
          --   values = { type = "boolean" },
          --   default = {id_token=true, access_token=false, user=false}
          --   -- required = false,

          --   -- type = "record",
          --   -- fields = {
          --   --   {id_token = {type = "boolean", default = true}},
          --   --   {access_token = {type = "boolean", default = false}},
          --   --   {user = {type = "boolean", default = false}},
          --   -- },
          --   -- required = false 

          -- },},
          {POST_LOGOUT_REDIRECT_URI = { type = "string", required = false },},
          -- REVOKE_TOKENS_ON_LOGOUT = { type = "string", required = false, default = "true" }, -- WE USE end_session_endpoint instead. didn't fint revoke_token_endpoint necessary for this option
        }
      }
    }
  }
}