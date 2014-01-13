git add .
git commit -am %1
call jekyll build
git checkout master
git pull
cp -r _site/* . && rm -rf _site/ && touch .nojekyll
git add .
git commit -am %1
git push --all origin