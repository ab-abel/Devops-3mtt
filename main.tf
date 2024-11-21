provider "aws" {
  region = var.aws_region
}

resource "aws_instance" "default" {
  ami           = "ami-012967cc5a8c9f891"
  instance_type = "t2.micro"
  key_name      = var.key_name
  tags = {
    Name = "ExampleInstance"
  }

  # Optionally, you can use user_data to configure your instance on boot
  user_data = <<-EOF
              #!/bin/bash
              yum update -y
              yum install -y httpd
              systemctl start httpd
              systemctl enable httpd
              EOF
}

resource "aws_security_group" "default" {
  name        = "allow_http_https"
  description = "Allow inbound HTTP and HTTPS traffic"
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

output "instance_ip" {
  description = "The public IP address of the EC2 instance"
  value       = aws_instance.default.public_ip
}
