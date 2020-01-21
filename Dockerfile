FROM node:13-buster

EXPOSE 3000

RUN mkdir -p usr/src/app

COPY package.json package.json

RUN yarn install && yarn start

COPY . .

CMD ["tini", "--", "node", "./bin/www"]
