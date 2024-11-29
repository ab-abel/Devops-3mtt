pipeline { 
    agent any 
    tools {
        nodejs 'nodejs'
        }
    enviroment{
        CLOUDSDK_CORE_PROJECT='PROJECT_ID'
        CLIENT_EMAIL='IAM_EMAIL'
        GCLOUD_CREDS='IAM_CREDS_JSON'
        DOCKERHUB_CREDENTIALS = 'dockerHubCredentials'
    }
    stages {
        stage('Authenticate to Google Cloud'){
            steps {
                sh '''
                    gcloud auth activate-service-account --key-file="$GCLOUD_CREDS"
                '''
            }
        }
        stage('Build'){
            steps {
                sh '''
                    npm install
                    docker build -t capstone-3mtt .
                    docker tag capstone-3mtt:latest elated205/3mtt:latest
                '''
            }
        }
        stage('Test'){
            steps {
                sh '''
                    npm test
                '''
            }
        }
        stage('Deploy To Docker Hub') { 
            steps { 
                withCredentials([usernamePassword(credentialsId: 'DockerCred', passwordVariable: 'PASS', usernameVariable: 'USER')]){
                    sh 'echo $PASS | docker login -u $USER --password-stdin'
                    sh 'docker push elated205/3mtt:latest'
                }
            }
        }
        stage('Deploy to cloud run') {
            input{
                message "Click OK! to continue deployment?"
                ok "OK"
            }
            steps {
                sh '''
                    gcloud run service replace service.yaml --platform='managed' --region='REGION'
                '''
            }
        }
    }
}