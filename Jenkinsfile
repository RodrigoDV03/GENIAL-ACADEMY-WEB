pipeline {
    agent any
    stages {
        stage('Instalar Dependencias') {
            steps {
                sh 'npm install'
            }
        }
        stage('Construir Proyecto') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Ejecutar Pruebas') {
            steps {
                sh 'npm test'
            }
        }
    }
    post {
        success {
            echo 'Pipeline ejecutado exitosamente.'
        }
        failure {
            echo 'Pipeline fallido. Revisa los errores.'
        }
    }
}
