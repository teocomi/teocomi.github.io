---
published: true
layout: post
date: 2017-02-18
categories:
  - revit
tags:
  - warning
  - export
  - api
---

The warnings list in Revit is not accessible via the API, at least for versions earlier than Revit 2018. 
Using the Win32 API, I've managed to circumvent this limitation by simulating user clicks on the interface to trigger the export of the html warnings list to a custom location. 
You can then use [Html Agility Pack](http://htmlagilitypack.codeplex.com/) or other libraries to parse the html table to get the information you need.

The method `ExportWarinings` in the class below stores the exported html files to the user's temp folder and returns its location , you can invoke it with: 

`var htmlPath = await Win32Api.ExportWarinings(uiapp);`

And here the full code I have used:

{% gist teocomi/fda8ee767d7ec27d1b04614242bcad18%}

Running the method does the following actions:

- generate a unique temp path
- run `PostCommand` to open the warnings windows
- clicks the "Export" button
- on a separate thread, sets the temp path as file name and clicks save
- closes the warnings dialog and returns the path

Delays of 500ms have been set in between some actions to allow windows to be displayed correctly before triggering the mouse clicks, but these values might need to be increased on slower machines.

Have fun with your warnings!