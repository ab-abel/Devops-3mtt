variable "project_id" {
  type        = string
  description = "Project ID"
}

variable "repo_name" {
  type        = string
  description = "Artifact Registry repo name"
}

variable "location" {
  type        = string
  description = "Artifact Registry repo location"
}

variable "image_name" {
  type        = string
  description = "Docker Image name"
}

variable "image_tag" {
  type = string
}