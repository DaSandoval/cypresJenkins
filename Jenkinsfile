pipeline {
  agent any

  tools {nodejs "node"}
  environment {
    registry = "disckmastrer@yahoo.com"
    registryCredential = 'danielsandoval1088'
    dockerImage = ''
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
