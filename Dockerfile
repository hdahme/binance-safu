FROM alpine

RUN apk update
RUN apk add nodejs \
  build-base \
  npm \
  alpine-sdk \
  vim \
  curl

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# ENV that are safe to expose
ENV PORT=3000
EXPOSE 3000

CMD [ "npm", "start" ]
