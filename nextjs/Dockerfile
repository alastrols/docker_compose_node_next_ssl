FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

COPY package*.json ./
COPY yarn.lock ./


# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

# RUN yarn install


EXPOSE 3005
CMD [ "yarn", "dev" ]