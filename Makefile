.PHONY: help api web db
.DEFAULT_GOAL := help

start: ## Create and start development containers
	@echo "Starting development environment"
	@make web-start

init: ## Setup dev environment
	@echo "Initializing dev environment"
	@docker build ./db/ -t rubenhensen/db:latest
	@docker create --publish 27017:27017 --name akela_db \
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

test: ## run tests on all containers
	@npm test --prefix ./api


debug: ## Stop, rebuild and start development containers
	@echo "Stop, rebuild and start development environment"
	@docker stop akela_db || true
	@docker system prune -f	
	@if [ -d "web/src/node_module" ]; then sudo rm -r web/src/node_modules; fi
	@if [ -d "web/node_module" ]; then sudo rm -r web/node_modules; fi
	@if [ -d "web/__sapper__" ]; then sudo rm -r web/__sapper__; fi

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

heroku.push.db:
	@echo "tagging and pushing db"
	@docker tag akela_db:latest registry.heroku.com/akela-db/web
	@docker push registry.heroku.com/akela-db/web
	@heroku git:remote -a akela-db
	@heroku container:release web


db-start: ## Start mongodb container
	@docker start akela_db

web-start: api-start ## Start frontend
	@gnome-terminal -- sh -c "cd web; npm run dev; bash"

api-start: db-start ## Start api
	@gnome-terminal -- sh -c "cd api; npm start; bash"







