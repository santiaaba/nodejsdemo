FROM node:stretch-slim
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3003
CMD ["node","index.js"]
