#  my-website(jekyll)

## Description
This is the jekyll code for my website/blog that is hosted on [joipoi.github.io](https://joipoi.github.io)

I make changes in here and then I build the project and the files generated there are my website

## Requirements
You need ruby for this, here is a good guide how to install it:
https://jekyllrb.com/docs/installation/

You also need jekyll which you install by writing in the terminal:

`gem install jekyll bundler`

## Install
Clone or download this reposotory to your local machine

then go to the cloned/downloaded directory and in the terminal run:
`bundle`

Now you should prepend your jekyll commands with "bundle exec" to use the jekyll version
defined in my gemfile.

To test if it is working run:
`bundle exec jekyll serve`

this should start a local server on http://localhost:4000which should have the full jekyll project

use `bundle exec jekyll build` to build the project into a directory called _site