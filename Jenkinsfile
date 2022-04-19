pipeline {
    agent any
    
    stages {
        stage('Build') {
            steps {
                bat 'npm install'
            }
        }
        
        stage('Test') {
            steps {
                bat 'node test'
            }
        }
        
        stage('Deploy') {
            steps {
                bat 'npm run build'
                bat 'npm start'
            }
        }
    }
}
