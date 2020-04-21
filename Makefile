.PHONY: help
.DEFAULT_GOAL := help

start: ## Create and start development containers
	@echo "Starting development environment"
	@docker-compose -f docker-compose.yml up -d

build: ## Rebuild development containers
	@echo "Rebuilding development containers"
	@docker-compose build

stop: ## Stop development containers
	@echo "Stopping development environment"
	@docker-compose -f docker-compose.yml down

debug: ## Stop, rebuild and start development containers
	@echo "Stop, rebuild and start development environment"
	@docker-compose -f docker-compose.yml down
	@docker-compose build
	@docker-compose -f docker-compose.yml up -d

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'