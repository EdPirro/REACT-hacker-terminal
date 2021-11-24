FROM node:16.13-alpine as build

WORKDIR /app

COPY ./view .
RUN npm ci
RUN npm run build

FROM node:16.13-alpine

WORKDIR /

COPY . .

RUN rm -r ./view/*
COPY --from=build /app/build ./view/build

RUN npm ci

EXPOSE 8000
CMD ["npm", "start"]
