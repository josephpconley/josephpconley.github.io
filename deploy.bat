call git add .
call git commit -am %1
call jekyll build
call git checkout master
call git pull
call cp -r _site/* . && rm -rf _site/ && touch .nojekyll
call git add .
call git commit -am %1
call git push --all origin