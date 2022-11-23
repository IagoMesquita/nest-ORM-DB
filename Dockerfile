FROM node:14.15.4-alpine3.12

RUN apk add --no-cache bash
# instalar o bash

RUN npm install -g @nestjs/cli
# instalar cli do nest de forma global

USER node

WORKDIR /home/node/app