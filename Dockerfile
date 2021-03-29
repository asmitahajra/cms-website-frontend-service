FROM node:alpine as builder 
#creates build for alpine os, container job done 
WORKDIR /app
#install package, dep stay at top. layered caching
COPY ./package.json ./package.json
# COPY ./yarn.lock ./yarn.lock
COPY ./package-lock.json ./package-lock.json

RUN ["npm", "install"]
# RUN yarn install
COPY . .
# COPY ./src ./src
RUN npm run build 
#creates /app/build
#creates a build specific to alpine

#EXPOSE 3000
#anything that changes frequently is pushed downwards

# CMD ["yarn", "start"]
#CMD ["npm", "start"]
#we do not want to build each time, only if file has changed, want to just expose build, using nginx

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
#creating an image called builder
#find container, take build from cont and put it in place
RUN rm /etc/nginx/conf.d/default.conf
#removing default conig
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
#then send our config inside etc
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
