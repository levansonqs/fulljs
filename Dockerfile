FROM node:11-alpine
EXPOSE 3000
WORKDIR /app
ADD src/package.json src/yarn.lock /app/
RUN yarn --pure-lockfile
ADD ./src /app

CMD [ "yarn", "start" ]