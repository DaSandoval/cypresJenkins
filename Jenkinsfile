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
        sh 'npm -v'
      }
    }
    stage('Test') {
      steps {
         sh 'node -v'
      }
    }
  }
}
