

now=`date +"%Y-%m-%d_%H_%M_%S"`
release_dir="help-pal-web_$now"
releases_dir="/home/ubuntu/releases"
app_dir="/home/ubuntu/help-pal-web"

# echo 'removing old versions'
cd $releases_dir
# sudo rm -r ./*

sudo mkdir $release_dir

cd ~

echo 'extracting version'
sudo tar -xf project.tar.gz --directory $releases_dir"/"$release_dir

sudo rm project.tar.gz

echo 'Setting permissions...'
cd $releases_dir"/"$release_dir

# sudo chgrp -R www-data $releases_dir"/"$release_dir
# sudo chmod -R ug+rwx  $releases_dir"/"$release_dir


echo 'Updating symlinks...'
sudo ln -nfs $releases_dir"/"$release_dir/build  $app_dir

exit
