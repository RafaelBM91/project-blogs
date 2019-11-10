build:
	@echo '***BUILD***'
	docker-compose -f docker-compose.yml build --force-rm --no-cache

build-cache-serv:
	@echo '***BUILD-CACHE-SERV***'
	docker-compose -f docker-compose.yml build ${srv}

up-debug:
	@echo '***UP-DEBUG***'
	docker-compose -f docker-compose.yml up --no-build

down:
	@echo '***DOWN***'
	docker-compose down
	
logs:
	@echo '***LOGS***'
	docker-compose -f docker-compose.yml logs

up:
	@echo '***UP***'
	docker-compose up --no-build -d

stop:
	@echo '***STOP***'
	docker-compose stop

restart:
	@echo '***RESTART***'
	docker-compose restart
