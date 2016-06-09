---
layout: post
title: "Stop &quot;System&quot; process using port 80 [How To] "
date: 2010-03-09 07:30
categories: [how-to]
tags: [apache, port, xampp]
---
Running [XAMPP or WAMP as local web servers](http://blog.teocomi.com/run-a-local-web-server-easily/) is extremely useful to test websites, but sometimes it gets pretty annoying when other processes use port 80 (i.e. skype) so that Apache can't start.
Recently I had the process "System" using that port, and I couldn't help stopping it! Finilally google gave me the right solution:

*You can set the IIS service to "start manually", you can uninstall IIS from your computer, or you can change the port settings for the Default Web Site and any other sites you have set up on your computer via IIS.*

*Launch the IIS Manager console (Win+R, C:WindowsSystem32inetsrviis.msc) and expand your server (it's your computer name) in the Connections panel on the left. In the expanded tree, select "Sites", which will list all the sites set up in IIS. Chances are you'll just have one, named "Default Web Site".*

*Select the website from the list in the main pane, then click "Bindings..." in the Actions panel on the right-hand side of the IIS Manager. This will bring up a dialog box showing which methods can be used to view the website and how. You'll want to select the one with "80" in the Port column, and then click Remove. Close the dialog, and the site will no longer be accessible via port 80.*

**IMPORTANT**

To find out which service is using port 80 do the following:

From a command prompt: Start | Run (type) cmd (click Ok) or Start > All Programs > Accessories > Command Prompt

Type the following and press enter:
`netstat -b -a`
