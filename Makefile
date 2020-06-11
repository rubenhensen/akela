.PHONY: help api web db
.DEFAULT_GOAL := help

start: ## Create and start development containers
	@echo "Starting development environment"
	@make web-start

init: ## Setup dev environment
	@echo "Initializing dev environment"
	@docker network create --driver bridge akela-net 
	@docker build ./db/ -t rubenhensen/db:latest
	@docker create --network akela-net --publish 27017:27017 --name akela_db \
    -e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
    -e MONGO_INITDB_ROOT_PASSWORD=secret \
    rubenhensen/db:latest
	@cd web; npm install
	@cd api; npm install
#	@cp .env.sample .env

stop: ## Stop development containers
	@echo "Stopping development environment"
	@docker stop akela_db

restart: ## Stop and restart development containers
	@make stop
	@make start

deploy.api: 
	@npm test --prefix ./api
	

test: ## run tests on all containers
	@sudo docker start akela_db
	@npm test --prefix ./api
	@npm run build --prefix ./api
	@npm run start-build --prefix ./api
	@npm test --prefix ./web


debug: ## Stop, rebuild and start development containers
	@echo "Stop, rebuild and start development environment"
	@docker stop akela_db || true
	@docker stop express || true 
	@docker system prune -f	
	@if [ -d "web/src/node_module" ]; then sudo rm -r web/src/node_modules; fi
	@if [ -d "web/node_module" ]; then sudo rm -r web/node_modules; fi
	@if [ -d "web/__sapper__" ]; then sudo rm -r web/__sapper__; fi
	@make init
	@make start

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

start.prod: ## Create and start production containers
	@echo "Starting development environment"
	@docker-compose -f docker-compose.prod.yml up -d

build.prod: ## Create and start production containers
	@echo "Building development environment"
	@docker-compose -f docker-compose.prod.yml build

test.prod: ## Create and start production containers
	@echo "Starting test environment"
	@docker-compose -f docker-compose.prod.yml up --exit-code-from cypress

stop.prod: ## Stop development containers
	@echo "Stopping development environment"
	@docker-compose -f docker-compose.prod.yml down

debug.prod: ## Stop, rebuild and start development containers
	@echo "Stop, rebuild and start development environment"
	@docker-compose -f docker-compose.prod.yml down
	@docker system prune -f
	@docker-compose build
	@docker-compose -f docker-compose.prod.yml up -d

heroku.push.web:
	@echo "tagging and pushing web"
	@docker tag akela_web:latest registry.heroku.com/akela-frontend/web
	@docker push registry.heroku.com/akela-frontend/web
	@heroku git:remote -a akela-frontend
	@heroku container:release web

heroku.push.api:
	@echo "tagging and pushing api"
	@docker tag akela_api:latest registry.heroku.com/akela-backend/web
	@docker push registry.heroku.com/akela-backend/web
	@heroku git:remote -a akela-backend
	@heroku container:release web

db-start: ## Start mongodb container
	@sudo docker start akela_db

web-start: api-start ## Start frontend
	@gnome-terminal -- sh -c "cd web; npm run dev; bash"
#	@gnome-terminal -- sh -c "cd web; npm run unit-test:watch; bash"

api-start: express-start ## Start api
	@gnome-terminal -- sh -c "cd api; npm start; bash"

express-start: db-start ## Start mongo-express
	@docker run --name express -d --network akela-net -e ME_CONFIG_MONGODB_SERVER=akela_db -e ME_CONFIG_MONGODB_ADMINUSERNAME=mongoadmin -e ME_CONFIG_MONGODB_ADMINPASSWORD=secret -p 8081:8081 mongo-express || true





