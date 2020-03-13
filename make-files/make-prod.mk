build: dependencies ## Image Constructor ~ Mode Production
	docker-compose -f ${PWD}/docker/docker-compose.yml build --force-rm --no-cache

up: ## Start Container (Daemon) ~ Mode Production
	docker-compose -f ${PWD}/docker/docker-compose.yml up --no-build -d

restart: ## ReStart Container ~ Mode Production
	docker-compose -f ${PWD}/docker/docker-compose.yml restart

down: ## Down Container ~ Mode Production
	docker-compose -f ${PWD}/docker/docker-compose.yml down

logs: ## Show Container's Logs ~ Mode Production
	@echo '***LOGS***'
	docker-compose -f ${PWD}/docker/docker-compose.yml logs --tail="all" --follow
