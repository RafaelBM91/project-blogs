include makefile-dev.mk

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

dependencies:
	@echo '***DEPENDENCIES***'
	docker run -it -v ${PWD}/frontend:/var/app -w /var/app node:latest npm install
	docker run -it -v ${PWD}/strapi:/srv/app -w /srv/app node:latest npm install

compile-front:
	@echo '***COMPILE-FRONT***'
	docker run -it -v ${PWD}/frontend:/var/app -w /var/app node:latest npm run build
