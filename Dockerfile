FROM node
WORKDIR /web
EXPOSE 8888
RUN apt-get update
RUN apt-get install -y make unzip
CMD ["make","deploy_server"]
