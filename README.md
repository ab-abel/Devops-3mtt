# Devops Demo with 3MTT dashboard

This project is a simple demo on what learn so far while undergoing 3MTT training. 

## Stack
    - HTML
    - CSS
    - React

## DevOps Goal

    - Dockerize the application and run it on a local server using Nginx image
    - Use git actions to build and compile base image
    - spin on a cloud server to test git actions label such as on merge
    - test on a cloud environment using AWS EC2 or Azure Live server.

## DOCKER BUILD Commands
### build docker image
    - docker build -t my-3mtt-dashboard .

### run the build image
    - docker run -p 3000:80 my-3mtt-dashboard
    - Open http://localhost:3000 to view it in your browser.
    
