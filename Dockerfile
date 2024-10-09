#specify a node image to use
FROM node:18-alpine As build

#create a work directory
WORKDIR /app

# copy package*.json file
COPY package*.json ./


# Install dependencies
RUN npm Install

# copy other files
COPY src/ /app/src
COPY public/ /app/public

# Build the React app
RUN npm run build

# Get image for nginx
FROM nginx:alpine

# copy the build in to the nginx directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose http port 80
EXPOSE 80

#run the app using nginx
CMD ["nginx", "-g", "deamon off;" ]


# Docker build the image with
# docker build -t my-3mtt-dashboard .

#run the final build with 
# docker run -p 3000:80 my-3mtt-dashboard