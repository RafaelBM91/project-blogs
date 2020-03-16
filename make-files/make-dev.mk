build-dev: dependencies ## Image Constructor ~ Mode Development
	docker-compose -f ${PWD}/docker/docker-compose-dev.yml build --force-rm --no-cache

up-dev: ## Start Container (No Daemon) ~ Mode Development
	docker-compose -f ${PWD}/docker/docker-compose-dev.yml up --no-build --force-recreate

up-dev-dm: ## Start Container (Daemon) ~ Mode Development
	docker-compose -f ${PWD}/docker/docker-compose-dev.yml up --no-build -d

restart-dev: ## ReStart Container ~ Mode Development
	docker-compose -f ${PWD}/docker/docker-compose.yml restart

down-dev: ## Down Container ~ Mode Development
	docker-compose -f ${PWD}/docker/docker-compose-dev.yml down

logs-dev: ## Show Container's Logs ~ Mode Development
	docker-compose -f ${PWD}/docker/docker-compose-dev.yml logs
