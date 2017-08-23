FROM node:boron
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ADD . /usr/src/app/
RUN npm i
CMD npm run dev
