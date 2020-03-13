# Requirement prev Deploy

    1) Install Git
    2) Install Docker
    3) Install Docker-Compose
    4) Install Make

# Show all make's (Makefile) targets

run command:

```properties
    make
```

# Steps for Deploy

## 1) Clone the Project

## 2) add file .env in root dir (within the project):

- environments local mode *development*:

```properties
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

```properties
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

**NOTE:** &nbsp;&nbsp; these variable should not change:
```properties
- GRAPHQL_URL=http://strapi:1337/graphql
- PORT_FRONT_EXPOSE=80
- PORT_ADMIN_EXPOSE=8080
```
## 3) Run commands line (Mode Production)

```properties
make build
```

```properties
make up
```

# Configure Admin for S3 from AWS

- Go to *Plugins* -> *File Upload*

![](https://github.com/WulperStudio/delta-project/blob/master/doc/images/strapi1.png)

- Select the option *"Amazom Web Service S3"*

![](https://github.com/WulperStudio/delta-project/blob/master/doc/images/strapi2.png)

- Complete the fields required and after do click to Save

![](https://github.com/WulperStudio/delta-project/blob/master/doc/images/strapi3.png)


# Configure Jenkins for Deploy or any jobs (Optional)

```properties
make up-jk
```

Optional example for pipeline:

```properties
pipeline {
    agent any
    stages {
        stage('Deploy & ReStart') {
            steps {
                sh "docker restart docker_front_1"
                sh "docker restart docker_admin_1"
                sh "docker restart docker_nginx_1"
            }
        }
    }
}
```
