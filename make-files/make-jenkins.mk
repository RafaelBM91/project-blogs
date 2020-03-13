include .env
export  $(shell sed 's/=.*//' .env)

up-jk: ## Start Jenkins Container ~ Mode General
	docker run \
		--user=root \
		-d \
		--name ${JENKINS_NAME} \
		--rm \
		-e NODE_ENV=${NODE_ENV} \
		-v ${PWD}/jenkins_home:/var/jenkins_home \
		-v /var/run/docker.sock:/var/run/docker.sock \
		-p ${PORT_JENKINS}:8080 \
		-p 50001:50000 \
		jenkinsci/blueocean:1.17.0

down-jk: ## Stop Jenkins Container ~ Mode General
	docker stop \
		${JENKINS_NAME}

logs-jk: ## Show Jenkins Logs ~ Mode General
	docker logs \
		--tail \
		--details \
		${JENKINS_NAME}
