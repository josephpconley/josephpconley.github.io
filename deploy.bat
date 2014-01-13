call jekyll build
call git add .
call git commit -am %1
echo one
call git checkout master & call git pull
echo two
cp -r _site/* . && rm -rf _site/ && touch .nojekyll
echo three
call git add .
call git commit -am %1
call git push --all origin