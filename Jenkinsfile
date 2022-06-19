pipeline {
    agent any
    triggers {
        cron('*/1 * * * *')
    }
    stages {
        stage('Example Build') {
            steps {
                echo 'Hello, Build'
                nodejs('Node-16.14'){
                    sh 'npm i'
                }
            }
        }
        stage('Example Test') {
            steps {
                echo 'Hello, Test'
                nodejs('Node-16.14'){
                    sh 'npm run single'
                }
            }
        }
    }
}