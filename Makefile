.PHONY: help api web db
.DEFAULT_GOAL := help

start: ## Create and start development containers
	@echo "Starting development environment"
	@docker-compose -f docker-compose.yml up -d
	@#/opt/google/chrome/chrome http://localhost:5000 http://localhost:8081 --guest


build: ## Rebuild development containers
	@echo "Rebuilding development containers"
	@docker-compose build

stop: ## Stop development containers
	@echo "Stopping development environment"
	@docker-compose -f docker-compose.yml down

restart: ## Stop and restart development containers
	@make stop
	@make start

api: ## stream stdout api container
	@docker logs -f akela_api_1

web: ## stream stdout web container
	@docker logs -f akela_web_1

db: ## stream stdout db container
	@docker logs -f akela_db_1

test: ## run tests on all containers
	@npm test --prefix ./api


debug: ## Stop, rebuild and start development containers
	@echo "Stop, rebuild and start development environment"
	@docker-compose -f docker-compose.yml down
	@docker system prune -f	
	@docker-compose build
	@docker-compose -f docker-compose.yml up -d

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









