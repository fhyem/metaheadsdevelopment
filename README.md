> > Steps to release to production

- SSH into digital ocean droplet.
- npm run build:server
- npm run build:client
- pm2 restart npm

> > Help with nGINX

- sudo apt update
- sudo apt install nginx
- sudo ufw app list
- sudo ufw allow 'Nginx HTTP'
- sudo ufw status
- systemctl status nginx

- reload on config change
  - sudo systemctl reload nginx
