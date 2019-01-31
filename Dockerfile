FROM node
WORKDIR /web
EXPOSE 8888
RUN apt-get install make
CMD ["make","deploy_server"]
