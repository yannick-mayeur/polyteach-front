FROM node:12.2.0 as build
WORKDIR /usr/src/app
# RUN apk add alpine-sdk autoconf
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json ./package.json
RUN npm install --production
RUN npm install react-scripts@3.0.1 -g --silent
RUN npm rebuild node-sass
COPY . .
RUN npm run build
RUN ls

# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
