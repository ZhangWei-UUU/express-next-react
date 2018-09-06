pipeline {
    agent { docker { image 'node:9.10.0' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}