# Security Policy

## Supported Versions
These are the versions of the project that are
currently being supported with security updates.

| Version | Supported          |
| :-----: | :----------------: |
| 0.x.x   | :white_check_mark: |

## Reporting a Vulnerability
For now, please file an issue. 

## Suggested Configuration
This is a website which should be deployed in a secured computer running Docker. 
The Docker commandline should require superuser privileges. 
If this website is to be available widely on the internet, it should be available behind a reverse proxy such as NGINX, Apache Server, or [Traefik](v). 
Maintain an SSL/TLS certificate from a Certificate Authority, such as Let's Encrypt, to encrypt communications. 
[Traefik](https://traefik.io) in particular makes this process easier. 
Only add users whom you trust to your server, as they will have access to this app. 
