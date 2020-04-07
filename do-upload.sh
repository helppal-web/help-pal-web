cd ~/help-pal-web
echo 'compressing' $1
envi='ubuntu@helppal.net'

npm run build
tar -czf project.tar.gz ./build

rm -rf build

echo 'copying files to server ${envi}'
scp -i "~/Downloads/helppal-net.pem" project.tar.gz $envi:~

ssh -i "~/Downloads/helppal-net.pem" $envi 'bash -s' < ./do-on-server.sh

echo 'done'

rm -rf  project.tar.gz



