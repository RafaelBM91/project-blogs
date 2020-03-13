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
