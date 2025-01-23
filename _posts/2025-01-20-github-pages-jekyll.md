---
title: 'Github Pages and jekyll'
tags: 
  - github
  - front-end
  - html
---
## Github Pages

### About

You probably already know what Github is but if you don't that is still ok. You don't need to know about Github or git to find use in this post. 

Github is a place where you can store files usually in combination with the version control system called Git. But the focus of this post is something they also offer called Github Pages.

Github Pages lets you host static files on the internet for free. The only thing needed is having a github account which you can create for free. The one downside is that you can only host static files and no server.

### Getting started

Assuming you have a Github account, the next step is to create a repository. This is simple to do and you can look up how if you don't know. This is where you will store the files for your project.

Once on your repositories page, click on settings and then click on pages. Then under source choose "Deploy from a branch" and under branch select "main" and under folder select "root"(There are other ways to set this up but this is the easiest imo). Now you can save and after some waiting your site should be live.

Try refreshing the page and it should tell you that your site is live and where you can find it. Your site will default to an index.html file so make sure to include one.

### Site url

Your site url should be something like: **https://\<username\>.github.io/\<repoName\>**  
where username is your username and repoName is the name of your repository. There is an option to completely change the url if you already own a domain name. 

It is also possible to have your site be at **https://\<username\>.github.io** without the reponame. To do this you need to create a repository called:  
**username.github.io (for me joipoi.github.io)**  
and then setup the pages from that repository like earlier. 

## Jekyll

On the official Github Pages website they recommend you to use something called Jekyll to make your site. Jekyll is a way to take markdown or other format and give it a layout which then creates static pages. It is written in Ruby but I don't think you need to learn a bunch of Ruby to use it.

There is a great step-step guide that I followed which I linked below. Most of the work is setting up your files and project structure, not a lot of new coding syntax to learn. You do need to download ruby though which can feel like a lot.

It is absolutely not a must to use Jekyll for Github pages but I tried it for my blog and found it nice and easy. I wanted it mostly because it is an easy way to convert markdown to static html.

## Extra Reading

[Github Pages Getting Started](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)  
[Github Pages Homepage](https://pages.github.com/)  
[Jekyll step-by-step](https://jekyllrb.com/docs/step-by-step/01-setup/)

