call jekyll build
call git add . && call git commit -am %1
call git checkout master && call git pull && cp -r _site/* . && rm -rf _site/ && touch .nojekyll
call git add . && call git commit -am %1 && call git push --all origin && git checkout source