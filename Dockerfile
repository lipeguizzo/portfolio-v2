FROM node:18-alpine

COPY . .

RUN apk add --no-cache \
  cairo-dev \
  pango-dev \
  libjpeg-turbo-dev \
  libpng-dev \
  giflib-dev \
  pixman-dev \
  build-base \
  python3

RUN npm install -g npm@10.9.0

RUN npm install next@13.5.6 react@18.2.0 react-dom@18.2.0

USER node

WORKDIR /home/node/app