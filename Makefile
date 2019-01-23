DEPLOY_HOME=/home/$(DEPLOY_USER)
DEPLOY_DIR=$(DEPLOY_HOME)/projects/$(PROJECT_NAME)


all:
	@echo "!"

install_dep:
	@echo "installing dependencies"
	cd site && npm install
	@echo "dependencies installed"
start_server:
	@echo "starting server"
	node site/server.js
	@echo "server has been stoped"
deploy_server: install_dep start_server

test:
	@echo "starting tests"
	@echo "tests completed"

docker_build:
	@echo "building docker image"
	docker build -t nlp-isa .
	@echo "docker image has been built"
docker_rm_old:
	@echo "stoping & removing old docker container"
	docker stop nlp-isa || true
	docker rm nlp-isa || true
	@echo "docker container stopped and removed"
docker_run:
	@echo "deploying docker container"
	docker run -d --restart=always --name nlp-isa -v `pwd`:/web nlp-isa
	@echo "docker container deployed"
docker: docker_build docker_rm_old docker_run

push_to_server:
	@echo "pusing to remote server"
	git remote add dev ssh://$(SSH_USER)@rexhaif.isa.ru:$(SSH_PORT)/home/dev/projects/nlp-isa
	git push dev master
	@echo "pushed to remote server"
ssh:
	@echo "deploying on remote server"
	ssh $(SSH_USER)@rexhaif.xyz -p $(SSH_PORT) "make docker"
	@echo "deployed"
deploy: push_to_server ssh
