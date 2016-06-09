---
layout: post
title: "Export guest list from Facebook events"
date: 2013-04-02 14:19
categories: [Facebook, JavaScript, Tips&amp;Tricks]
tags: [event, export, facebook, guest]
---
**N.B. the procedure below might be outdated, but you can probably figure out a smarter way :)**

Current version of Facebook does not support a straight export method for its events guest lists to softwares like Excel. You can download an .ics file of the event, but that only contains a list of the people that are Attending or Maybe attending.

Following how I did, probably there are better ways, but this is what I first came to:

1.  Using Google Chrome or (Firefox and Firebug plugin), navigate to the event page and visualize the full list of guests you want to export. **Scroll down till the bottom so that all people are loaded. **</span></span>

[![Scroll down so that all people are loaded.](/assets/2013/04/02-04-2013-15-30-57-300x139.png)](/assets/2013/04/02-04-2013-15-30-57.png) 

Scroll down so that all people are loaded.

2.  Right click on top of the list *>> Inspect Element* from Chrome context menu (or similar from Firebug). And find the HTML node corresponding to the pop up window containing the list. Then copy the HTML contained in the node (or any similar).

[![Copy HTML node.](/assets/2013/04/02-04-2013-15-56-54-300x139.png)](/assets/2013/04/02-04-2013-15-56-54.png) 

Copy HTML node.

3.  Paste into a text editor and add the following strings to the top:

```html
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script><script type="text/javascript">// <![CDATA[
$(document).ready(function(){
	$(".fcb a").each(function() {$("#names").append($(this).html()+"</br>")});
});
// ]]></script></pre>
<div id="names"></div>
<pre>
```

[![](/assets/2013/04/02-04-2013-16-09-11-300x163.png)](/assets/2013/04/02-04-2013-16-09-11.png) 

Paste script and save as .html file
4.  Save the file as .html and open it in Chrome, at the beginning you will see a list with the names. Of course you can add/remove formatting to the list by editing the jQuery string above.
We need to save the HTML nodes to file because Facebook loads the list dynamically and jQuery (as far as I tried) cannot access its DOM elements when dynamically loaded/created.
If you know any better way please share in the comments!
