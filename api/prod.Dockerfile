# pull official base image
FROM node:13.13.0-alpine

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
RUN npm install --no-optional
RUN echo "test"
RUN echo $JWT_SECRET

# add app
COPY . ./
RUN npm run build

# start app
CMD ["node", "./build/app.js"]