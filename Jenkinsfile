pipeline {
    agent any 
    tools {nodejs "NodeJS"}
    environment {
        PROJECT_ID = credentials('project_id')
        REGION = credentials('region')
        REPOSITORY = credentials('project_repo')
        IMAGE_NAME = '3mtt-dashboard'
        SERVICE_NAME = 'capstone-prod'
        STAGGING_SERVER = 'capstone-stage'
        GOOGLE_APPLICATION_CREDENTIALS = credentials('gcloud-creds') // Jenkins credential ID for GCP
    }

    stages {
        stage('Checkout, Build 3MTT Dashboard APP') {
            steps {
                git branch: 'Main', credentialsId: 'PAT_JENKINS', url: 'https://github.com/ab-abel/Devops-3mtt.git'
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('APP Testing') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh """
                    docker build -t $REGION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY/$IMAGE_NAME:latest .
                    """
                }
            }
        }

        stage('Push to Artifact Registry') {
            steps {
                withCredentials([file(credentialsId: 'gcloud-creds', variable: 'GCLOUD_CREDS')]){
                    
                    sh '''
                     gcloud auth activate-service-account --key-file="$GCLOUD_CREDS"
                     gcloud auth configure-docker $REGION-docker.pkg.dev --quiet
                     docker push $REGION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY/$IMAGE_NAME:latest
                    '''
                }
            }
        }

        stage('Deploy to Stagging Server') {
            steps {
                script {
                    sh """
                    gcloud run deploy $STAGGING_SERVER \
                        --image $REGION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY/$IMAGE_NAME:latest \
                        --region $REGION \
                        --platform managed \
                        --allow-unauthenticated --max-instances=2\
                        --port=80\
                        --quiet
                    gcloud run services add-iam-policy-binding $STAGGING_SERVER --region=$REGION --member='allUsers' --role='roles/run.invoker'
                    """
                }
            }
        }

        stage('Deploy to Production') {
            input{
                message "Click OK! To deploy to Production?"
                ok "OK"
            }
            steps {
                script {
                    sh """
                    gcloud run deploy $SERVICE_NAME \
                        --image $REGION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY/$IMAGE_NAME:latest \
                        --region $REGION \
                        --platform managed \
                        --allow-unauthenticated --max-instances=2\
                        --port=80\
                        --quiet
                    gcloud run services add-iam-policy-binding $SERVICE_NAME --region=$REGION --member='allUsers' --role='roles/run.invoker'
                    """
                }
            }
        }
    }

    post {
        always {
            cleanWs()  //Clean up the workspace after the build
        }
    }
}