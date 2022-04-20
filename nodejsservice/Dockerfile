FROM node:latest
COPY ./app /home/node
WORKDIR /home/node
RUN npm install; mv node_modules /node_modules; npm install -g nodemon
