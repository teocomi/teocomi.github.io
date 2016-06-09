---
layout: post
title: "How to download Flickr protected photos"
date: 2011-06-16 23:06
categories: [Tips&amp;Tricks]
tags: [download, flickr, image, photo]
---
Nothing on the internet is safe, especially if it's protected!

![](/assets/2011/06/3688259488_757b4ccc32_b-620x460.jpg "3688259488_757b4ccc32_b")
Here I'll show you how you could easily download photos from Flickr even when this is disabled. Of course this is only for illustrative purpose, downloading images protected by copyright is (maybe or maybe not) illegal.

1.  Check out [this photo of mine](http://www.flickr.com/photos/teocomi/3688259488), it's so cool I want to download it, but I cannot
2.  Right click on the picture and select [Large](http://www.flickr.com/photos/teocomi/3688259488/sizes/l/in/photostream/), or just add */sizes/l/* to the url
3.  Now press *CTRL+U (in Chrome & Firefox)* to see the page source
4.  *CTRL+F* to search for "spaceball", this is an empty DIV that avoid you to download the image
5.  Now just click on the [link](http://farm3.static.flickr.com/2651/3688259488_757b4ccc32_b.jpg) in the <*img>* tag below the `<div class="spaceball" style="height:761px; width: 1024px;"></div> ` and voilà!
