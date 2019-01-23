FROM node
WORKDIR /web
EXPOSE 8888
RUN apt install make
CMD ["make","deploy_server"]
