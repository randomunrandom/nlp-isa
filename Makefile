DEPLOY_HOME=/home/$(DEPLOY_USER)
DEPLOY_DIR=$(DEPLOY_HOME)/projects/$(PROJECT_NAME)

all:
	@echo "!"

npm_install:
	cd site && npm install
start_server:
	node site/server.js
deploy_server: npm_install start_server

docker_build:
	docker build --build-arg port=$(DOCKER_PORT) -t nlp-isa .
docker_rm_old:
	@echo "stoping & removing old docker container"
	docker stop nlp-isa || true && docker rm nlp-isa || true
	@echo "docker container removed"
docker_run:
	@echo "deploying docker container"
	docker run --restart=always --name nlp-isa -p $(DOCKER_PORT):$(DOCKER_PORT) -d -v `pwd`:/web nlp-isa
	@echo "docker container deployed"
docker: docker_build docker_rm_old docker_run

test:
	@echo test
travis_push:
	@echo travis
#	git push
ssh:
	@echo ssh
#	ssh "make docker"
deploy: test travis_push ssh
