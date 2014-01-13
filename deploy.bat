git.exe add .
git.exe commit -am %1
rem one
jekyll.exe build
git.exe checkout master
git.exe pull
rem two
cp -r _site/* . && rm -rf _site/ && touch .nojekyll
git.exe add .
git.exe commit -am %1
git.exe push --all origin