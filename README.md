# blog

My personal blog, powered by Jekyll

## build
```
sudo apt-get install ruby-bundler
bundle install
```

## run
```
export SSL_CERT_FILE=/home/jconley/Downloads/cacert.pem
bundle exec jekyll serve 
```

## deploy
simply push to latest master, can take up to 10 min for GitHub to deploy

## resume
I use [JSONResume](https://jsonresume.org/) to generate both HTML and PDF versions of my resume.  For my reference, the commands I use (from _includes directory) are:
- `resume export --format html --theme kwan test.html`
- TODO - still using older PDF version, need to find a good theme compatible with PDF and isn't too long. Command will probably look like
`resume export --format html --theme compact resume.html;html-pdf resume.html resume.pdf`

## tags
run `scalac Tags.scala` to compile the Tag generator
run `scala Tags` to generate tag pages based on the tags in tags.csv

## Medium
Remember to use Import Story... when duplicating content in Medium, otherwise you'll anger the Google Gods of SEO!  

## Jekyll setup
- sudo apt-get install ruby ruby-dev
- https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/
