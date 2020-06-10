FROM node:12-stretch

USER node

RUN mkdir /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package.json package-lock.json ./

RUN npm ci

COPY . .

CMD ["node", "index.js"]
