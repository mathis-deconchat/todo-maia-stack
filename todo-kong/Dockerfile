FROM kong:alpine

LABEL description="Alpine + Kong  + kong-oidc plugin"

USER root
RUN apk update && apk add curl git gcc musl-dev
RUN luarocks install luaossl OPENSSL_DIR=/usr/local/kong CRYPTO_DIR=/usr/local/kong
RUN luarocks install --pin lua-resty-jwt

COPY kong-oidc-webinage ./kong-oidc-webinage
WORKDIR kong-oidc-webinage
RUN luarocks make

USER kong
