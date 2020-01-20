build-dev:
	@echo '***BUILD-DEV***'
	docker-compose -f docker-compose-dev.yml build --force-rm --no-cache

build-cache-serv:
	@echo '***BUILD-CACHE-SERV***'
	docker-compose -f docker-compose-dev.yml build ${srv}

up-it-dev:
	@echo '***UP-IT-DEV***'
	docker-compose -f docker-compose-dev.yml up --no-build --force-recreate

restart-dev:
	@echo '***RESTART-DEV***'
	docker-compose -f docker-compose.yml restart

down-dev:
	@echo '***DOWN***'
	docker-compose -f docker-compose-dev.yml down

logs-dev:
	@echo '***LOGS-DEV***'
	docker-compose -f docker-compose-dev.yml logs
