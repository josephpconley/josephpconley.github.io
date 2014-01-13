call git add .
call git commit -am %1
rem one
call jekyll build
call git checkout master
call git pull
rem two
call cp -r _site/* . && rm -rf _site/ && touch .nojekyll
call git add .
call git commit -am %1
call git push --all origin