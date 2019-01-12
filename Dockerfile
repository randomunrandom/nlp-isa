FROM node
ARG port
WORKDIR /web
EXPOSE $port
RUN apt install make
CMD ["make","deploy"]
