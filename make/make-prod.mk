build:
	@echo '***BUILD***'
	docker-compose -f ${PWD}/docker/docker-compose.yml build --force-rm --no-cache

up:
	@echo '***UP***'
	docker-compose -f ${PWD}/docker/docker-compose.yml up --no-build -d

down:
	@echo '***DOWN***'
	docker-compose -f ${PWD}/docker/docker-compose.yml down

logs:
	@echo '***LOGS***'
	docker-compose -f ${PWD}/docker/docker-compose.yml logs --tail="all" --follow

restart:
	@echo '***RESTART***'
	docker-compose -f ${PWD}/docker/docker-compose.yml restart

dependencies:
	@echo '***DEPENDENCIES***'
	docker run -it -v ${PWD}/frontend:/var/app -w /var/app node:latest npm install
	docker run -it -v ${PWD}/admin:/srv/app -w /srv/app node:latest npm install

compile-front:
	@echo '***COMPILE-FRONT***'
	docker run -it -v ${PWD}/frontend:/var/app -w /var/app node:latest npm run build
