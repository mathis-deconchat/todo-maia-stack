package = "kong-oidc-webinage"
version = "1.0.0-1"
-- source = {
--     url = "git://github.com/nokia/kong-oidc",
--     tag = "v1.1.0",
--     dir = "kong-oidc"
-- }
source = {
    url = "",
    -- tag = "v1.1.0",
    -- dir = "kong-oidc-webinage"
}
description = {
    summary = "Adaptation of kong-oidc to be able to serve SPAs. Original description summary : A Kong plugin for implementing the OpenID Connect Relying Party (RP) functionality",
    detailed = [[
        Adaptation of kong-oidc to be able to serve SPAs

        Original description :

        kong-oidc is a Kong plugin for implementing the OpenID Connect Relying Party.

        When used as an OpenID Connect Relying Party it authenticates users against an OpenID Connect Provider using OpenID Connect Discovery and the Basic Client Profile (i.e. the Authorization Code flow).

        It maintains sessions for authenticated users by leveraging lua-resty-session thus offering a configurable choice between storing the session state in a client-side browser cookie or use in of the server-side storage mechanisms shared-memory|memcache|redis.

        It supports server-wide caching of resolved Discovery documents and validated Access Tokens.

        It can be used as a reverse proxy terminating OAuth/OpenID Connect in front of an origin server so that the origin server/services can be protected with the relevant standards without implementing those on the server itself.
    ]],
    -- homepage = "https://github.com/nokia/kong-oidc",
    -- license = "Apache 2.0"
}
dependencies = {
    "lua-resty-openidc ~> 1.7.2" -- Newer version than original to be able to raise errors instead of redirects with authenticate(opts, nil, "deny").
}
build = {
    type = "builtin",
    modules = {
    ["kong.plugins.oidc-webinage.filter"] = "kong/plugins/oidc-webinage/filter.lua",
    ["kong.plugins.oidc-webinage.handler"] = "kong/plugins/oidc-webinage/handler.lua",
    ["kong.plugins.oidc-webinage.schema"] = "kong/plugins/oidc-webinage/schema.lua",
    ["kong.plugins.oidc-webinage.session"] = "kong/plugins/oidc-webinage/session.lua",
    ["kong.plugins.oidc-webinage.utils"] = "kong/plugins/oidc-webinage/utils.lua"
    }
}
