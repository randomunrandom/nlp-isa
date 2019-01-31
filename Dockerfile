FROM node
WORKDIR /web
EXPOSE 8888
RUN apt-get update
RUN yes | apt-get install make unzip
CMD ["make","deploy_server"]
