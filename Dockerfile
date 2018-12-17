FROM node:8.4.0-alpine

RUN apk add --no-cache curl

ENV NODE_ENV production

RUN mkdir /app
WORKDIR /app

COPY index.js post.raw.json /app/
RUN npm -q install --production --no-optional bunyan@1.8.12

CMD [ "node", "index.js" ]
