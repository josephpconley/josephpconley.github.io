call jekyll build
call git add .
call git commit -am %1
rem one
call git checkout master
call git pull
rem two
cp -r _site/* . && rm -rf _site/ && touch .nojekyll
call git add .
call git commit -am %1
call git push --all origin