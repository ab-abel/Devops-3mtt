provider "google" {
  project = "PROJECT_ID"
  region  = "us-central1"
  zone    = "us-central1-a"
}

# initialize terraform backend
terraform {
 backend "gcs" {
   bucket  = "hello-world-state-file"
   prefix  = "/"
 }
}

resource "google_cloud_run_service" "app_service" {
  name     = "hello-world"
  location = "us-central1"
  
  template {
    spec {
      containers {
        image = "${var.location}-docker.pkg.dev/${var.project_id}/${var.repo_name}/${var.image_name}:${var.image_tag}"
      }
    }
  }
}

data "google_iam_policy" "noauth" {
  binding {
    role = "roles/run.invoker"
    members = [
      "allUsers",
    ]
  }
}

resource "google_cloud_run_service_iam_policy" "noauth" {
  location    = google_cloud_run_service.app_service.location
  project     = "${var.project_id}"
  service     = google_cloud_run_service.app_service.name

  policy_data = data.google_iam_policy.noauth.policy_data
}