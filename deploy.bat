git add .
git commit -am %1
jekyll build
git checkout master
cp -r _site/* . && rm -rf _site/ && touch .nojekyll
git add .
git commit -am %1
git push --all origin