# pull official base image
FROM cypress/base:10
WORKDIR /app

RUN npm install --save-dev cypress
#RUN $(npm bin)/cypress verify
#RUN $(npm bin)/cypress run

# set working directory


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