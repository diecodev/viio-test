FROM node:latest

RUN mkdir -p /backend

WORKDIR /backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]