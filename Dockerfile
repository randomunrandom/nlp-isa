FROM node
WORKDIR /web
EXPOSE 8888
RUN apt install make unzip
CMD ["make","deploy_server"]
