variable "aws_region" {
  description = "The AWS region"
  default     = "us-east-1"  # Update this as needed
}

variable "key_name" {
  description = "The name of the key pair to use for SSH access"
  type        = string
  default     = "app-ssh-key"  # Replace with your actual SSH key name if needed
}

variable "ec2_name" {
  description = "The name of machine"
  type        = string
}

variable "private_key_path" {
  default = "/home/ubuntu/.ssh/id-rsa"
}
