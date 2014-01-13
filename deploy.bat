call jekyll build
call git add .
call git commit -am %1
rem one
call git checkout master
rem two
call git pull
rem three
cp -r _site/* . && rm -rf _site/ && touch .nojekyll
call git add .
call git commit -am %1
call git push --all origin