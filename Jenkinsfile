pipeline {
  agent any

  tools {nodejs "node"}
  environment {
        AWS_ACCESS_KEY_ID     = credentials('daniel')
        AWS_SECRET_ACCESS_KEY = credentials('daniel')
    }
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/DaSandoval/cypresJenkins'
      }
    }
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
         sh 'npm run test'
      }
    }
  }
}
