#!/bin/bash
source ~/mysetenv.sh
gatsby clean && gatsby build --prefix-paths
sshpass -e ssh -o StrictHostKeyChecking=no "$pu_server" "rm -r .www/*"
sshpass -e scp -o StrictHostKeyChecking=no -r ./public/* "$pu_server_www"
sshpass -e ssh -o StrictHostKeyChecking=no "$pu_server" "cd .www;chmod -R 755 ./*"
cat ~/myunsetenv.sh