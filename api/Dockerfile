FROM node:8-alpine

EXPOSE 3000

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . /usr/src/app

CMD ["node", "server.js"]