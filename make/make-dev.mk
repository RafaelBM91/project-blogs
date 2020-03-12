build-dev:
	@echo '***BUILD-DEV***'
	docker-compose -f ${PWD}/docker/docker-compose-dev.yml build --force-rm --no-cache

up-it-dev:
	@echo '***UP-IT-DEV***'
	docker-compose -f ${PWD}/docker/docker-compose-dev.yml up --no-build --force-recreate

restart-dev:
	@echo '***RESTART-DEV***'
	docker-compose -f ${PWD}/docker/docker-compose.yml restart

down-dev:
	@echo '***DOWN***'
	docker-compose -f ${PWD}/docker/docker-compose-dev.yml down

logs-dev:
	@echo '***LOGS-DEV***'
	docker-compose -f ${PWD}/docker/docker-compose-dev.yml logs
