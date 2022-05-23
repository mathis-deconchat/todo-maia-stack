FROM node:16

WORKDIR /usr/src

COPY package*.json ./
# copy package and package-lock.json

RUN npm install --only=production

COPY dist/src /usr/src/
# copy dist/server.js directly to /usr/src/horizon/server.js

EXPOSE 6060
# internal port for graphql apollo server

CMD ["node", "server.js"]