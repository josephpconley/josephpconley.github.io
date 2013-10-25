blog
====

My personal blog


INSTALLING JEKYLL

yum install ruby-devel

#NO!  As of the time of this writing, can't use yum repo for rubygems, go to rubyforge
#yum install gem

#From rubyforge
wget http://rubyforge.org/frs/download.php/75475/rubygems-1.8.11.tgz
tar -xzf rubygems-1.8.11.tgz
cd rubygems-1.8.11
ruby setup.rb

gem install jekyll

#markdown
What's better, RDiscount or Maruku?

RUNNING JEKYLL
jekyll -w serve