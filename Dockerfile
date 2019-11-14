FROM node:12.2.0 as build
WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json ./package.json
RUN npm install
RUN npm install react-scripts@3.0.1 -g --silent
RUN npm install serve -g --silent
COPY . .
RUN npm run build
EXPOSE 3000
CMD serve -s dist -l 3000
