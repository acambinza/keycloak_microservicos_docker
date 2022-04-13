FROM node:v16.13.1

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn install

RUN apt-get -y install nano

COPY . .

EXPOSE 5000


RUN yarn dev

CMD [ "yarn", "server.ts" ]
