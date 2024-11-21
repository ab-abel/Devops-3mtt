provider "google" {
    credentials = file("gcp-key.json")
    project     = "var.project_id"
    region      = "var.region"
    zone        = "var.zone"
}

resource "google_compute_instance" "devops_server" {
    name    = "devops-server"
    machine_type = "e2-medium"
    zone    = "var.zone"

    boot_disk {
        initialize_params {
            image = "debian-cloud/debian-11"
        }
    }

    network_interface {
        network = "default"

        access_config {
            // assign ip adddress
        }
    }
    tags = ["http-server", "https-server"]
}

resource "google_compute_firewall" "default" {
  name    = "allow-http-https"
  network = "default"

  allow {
    protocol = "tcp"
    ports    = ["80", "443"]
  }

  target_tags = ["http-server", "https-server"]
}