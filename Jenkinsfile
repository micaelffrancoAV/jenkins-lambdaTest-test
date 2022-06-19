pipeline {
    agent none
    triggers {
        cron('*/5 * * * *')
    }
    stages {
        stage('Example Build') {
            steps {
                echo 'Hello, Build'
            }
        }
        stage('Example Test') {
            steps {
                echo 'Hello, Test'
            }
        }
        stage('Example deploy') {
            steps {
                echo 'Hello, Test'
            }
        }
    }
}