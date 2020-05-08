# pull official base image
FROM node:13.13.0-alpine

ARG JWT_SECRET
ARG MONGODB_URI
ARG PORT
ARG DB_PASSWORD
ARG DB_USERNAME
ARG LOG_LEVEL
ARG MAILGUN_API_KEY
ARG MAILGUN_DOMAIN
ARG API_URL

ENV JWT_SECRET=$JWT_SECRET
ENV MONGODB_URI=$MONGODB_URI
ENV PORT=$PORT
ENV DB_PASSWORD=$DB_PASSWORD
ENV DB_USERNAME=$DB_USERNAME
ENV LOG_LEVEL=$LOG_LEVEL
ENV MAILGUN_API_KEY=$MAILGUN_API_KEY
ENV MAILGUN_DOMAIN=$MAILGUN_DOMAIN
ENV API_URL=$API_URL

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
RUN apk add python3
RUN apk add make
RUN apk add build-base
COPY package.json ./
COPY package-lock.json ./
#RUN npm install --production
RUN npm install

# add app
COPY . ./
RUN npm run build

# start app
CMD ["node", "./build/app.js"]