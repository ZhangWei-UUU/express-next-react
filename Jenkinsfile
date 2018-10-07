pipeline {
    agent { docker { image 'node:10.4.1' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
    }
}