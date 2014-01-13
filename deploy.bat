call jekyll build
call git add .
call git commit -am %1
echo one
call git checkout master
echo two
call git pull
echo three
cp -r _site/* . && rm -rf _site/ && touch .nojekyll
call git add .
call git commit -am %1
call git push --all origin