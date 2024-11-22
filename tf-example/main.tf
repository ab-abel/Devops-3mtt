data "aws_ami" "ubuntu" {
    most_recent = true

    filter {
        name   = "name"
        values = ["ubuntu/images/hvm-ssd/*20.04-amd64-server-*"]
    }

    filter {
        name   = "virtualization-type"
        values = ["hvm"]
    }
    
    owners = ["099720109477"] # Canonical
}

provider "aws" {
  region = var.aws_region
}


resource "aws_instance" "default" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t2.micro"
  key_name      = var.key_name
  vpc_security_group_ids = ["sg-0049869989aecfc10","sg-02e089c40be1dbe5e"]
  subnet_id = "subnet-01f56420769487d2f"
  associate_public_ip_address = true
  

  provisioner "remote-exec" {
    inline = [
      "sudo apt update",
      "sudo apt install docker.io -y",
      "sudo systemctl start docker",
      "sudo systemctl enable docker",
      "sudo docker pull elated205/3mtt:latest",
      "sudo docker run -d -p 80:3000 elated205/3mtt:latest"
    ]
  }

    tags = {
    Name = var.ec2_name
  }
}
