# Requirement prev Deploy

    1) Install Git
    2) Install Docker
    3) Install Docker-Compose
    4) Install Make

# Steps for Deploy

## 1) Clone the Project

## 2) add file .env in root dir (within the project):

- environments local mode *development*:

```shell
    NODE_ENV=development

    DATABASE_CLIENT=postgres
    DATABASE_HOST=database
    DATABASE_PORT=5432
    DATABASE_NAME=postgres
    DATABASE_USERNAME=postgres
    DATABASE_PASSWORD=1234

    POSTGRES_USER=postgres
    POSTGRES_PASSWORD=1234
    POSTGRES_DB=postgres

    PORT_FRONT=8084:80
    PORT_ADMIN=8085:8080

    PORT_FRONT_EXPOSE=80
    PORT_ADMIN_EXPOSE=8080

    JENKINS_NAME=jenkins-delta
    PORT_JENKINS=8086

    GRAPHQL_URL=http://strapi:1337/graphql
```

- environments local mode *production*:

```shell
    NODE_ENV=development

    DATABASE_CLIENT=[value_for_production]
    DATABASE_HOST=[value_for_production]
    DATABASE_PORT=[value_for_production]
    DATABASE_NAME=[value_for_production]
    DATABASE_USERNAME=[value_for_production]
    DATABASE_PASSWORD=[value_for_production]

    PORT_FRONT=[external_port]:80
    PORT_ADMIN=[external_port]:8080

    PORT_FRONT_EXPOSE=80
    PORT_ADMIN_EXPOSE=8080

    JENKINS_NAME=[value_for_production]
    PORT_JENKINS=[external_port]

    GRAPHQL_URL=http://strapi:1337/graphql
```

### Note:
    these variable should not change:
    - GRAPHQL_URL=http://strapi:1337/graphql
    - PORT_FRONT_EXPOSE=80
    - PORT_ADMIN_EXPOSE=8080

## 3) Run commands line (Mode Production)

```sh
make build
```

```sh
make up
```

# Configure Admin for S3 from AWS

- Go to *Plugins* -> *File Upload*

![](https://miro.medium.com/max/700/1*L8kZCTP1abEbXFwF3LbSeA.png)

- Select the option *"Amazom Web Service S3"*

![](https://miro.medium.com/max/700/1*qaSS_iSnC-wG5ZlSCIEFpw.png)

- Complete the fields required and after do click to Save

![](https://miro.medium.com/max/700/1*Yf2vod4cOE4f_2exqX3uFw.png)

