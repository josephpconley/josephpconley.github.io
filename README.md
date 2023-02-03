# blog

My personal blog, powered by Jekyll.

Theme by [Beautiful Jekyll](https://beautifuljekyll.com/)

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

## posts
common code/helpers used in posts
```
<img class="ui large centered rounded image rotate180" src="/assets/20220902_185904.jpg" />
<iframe width="700" height="450" src="https://www.youtube.com/embed/vc3i2Q49kWI" frameborder="0" allowfullscreen></iframe>
```

## resume
I use [JSONResume](https://jsonresume.org/) to generate both HTML and PDF versions of my resume.  For my reference, the commands I use (from _includes directory) are:
- `resume export --format html --theme kwan test.html`
- TODO - still using older PDF version, need to find a good theme compatible with PDF and isn't too long. Command will probably look like
`resume export --format html --theme compact resume.html;html-pdf resume.html resume.pdf`

## tags
run `scalac Tags.scala` to compile the Tag generator (should be rare)
run `scala Tags` to generate tag pages based on the tags in tags.csv

## Jekyll setup
- sudo apt-get install ruby ruby-dev
- https://help.github.com/articles/setting-up-your-github-pages-site-locally-with-jekyll/
