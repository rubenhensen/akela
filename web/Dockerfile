# pull official base image
FROM node

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --unsafe-perm=true cypress
RUN npm install
RUN apt-get update
RUN apt-get install xvfb -y

# add app
COPY . ./

# start app
CMD ["npm", "run", "dev"]