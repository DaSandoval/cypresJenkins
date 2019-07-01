pipeline {
  agent any

  tools {nodejs "node"}
  
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/DaSandoval/cypresJenkins'
      }
    }
    stage('Install dependencies') {
      steps {
        bat 'npm install'
      }
    }
    stage('Test') {
      steps {
         bat 'npm run test'
      }
    }
  }
}
