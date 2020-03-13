dependencies: ## Install Dependencies ~ Mode General
	docker run -it -v ${PWD}/frontend:/var/app -w /var/app node:latest npm install
	docker run -it -v ${PWD}/admin:/srv/app -w /srv/app node:latest npm install

compile-front: ## Compile FrontEnd ~ Mode General
	docker run -it -v ${PWD}/frontend:/var/app -w /var/app node:latest npm run build
