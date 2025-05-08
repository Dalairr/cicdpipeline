#!/bin/bash
cd /home/ec2-user/cicd-demo-app
nohup node app.js > server.log 2>&1 &
