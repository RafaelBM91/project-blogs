.DEFAULT_GOAL := help

include .env
export  $(shell sed 's/=.*//' .env)

include make-files/make-dev.mk
include make-files/make-prod.mk
include make-files/make-general.mk
include make-files/make-jenkins.mk

help:
	@printf "\033[31m%-22s %-59s %s\033[0m\n" "Target" " Help"; \
	printf "\033[31m%-22s %-59s %s\033[0m\n"  "------" " ----"; \
	grep -hE '^\S+:.*## .*$$' $(MAKEFILE_LIST) | sed -e 's/:.*##\s*/:/' | sort | awk 'BEGIN {FS = ":"}; {printf "\033[32m%-22s\033[0m %-58s \033[34m%s\033[0m\n", $$1, $$2, $$3}'
