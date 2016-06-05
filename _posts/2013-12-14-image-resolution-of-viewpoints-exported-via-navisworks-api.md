---
layout: post
title: "Image resolution of Viewpoints exported via Navisworks API"
date: 2013-12-14 20:41
categories: [Navisworks API]
tags: [api, clash, export, image, navisworks, resolution, size, snapshot, viewpoint]
---
If you ever needed to export images of Navisworks Viewpoints or Snapshots using its API you might have probably incurred it the great article by Xiaodong Liang [Workaround to export image of clash result](http://adndevblog.typepad.com/aec/2012/09/workaround-to-export-image-of-clash-result.html). But the code, using Navisworks COM API, is exporting by default .png images that are just 256x256px big!

How do we change the image size and resolution?

I don't know if there is a way to do it from the API, but it is possible by changing a hidden setting of Navisworks: click on the main Navisworks menu button and then **holding the SHIFT key click “Options”** (this will give you access to the advanced Options Editor). From here click Export>lcodpimage and set desired height and width.

![Untitled](/assets/2013/12/Untitled-419x470.png)

The code needed to export the images is the following:

```csharp
// get the state of COM
ComApi.InwOpState10 oState = ComBridge.State;
// get the IO plugin for image
ComApi.InwOaPropertyVec options = oState.GetIOPluginOptions("lcodpimage");
// configure the option "export.image.format" to export png
foreach (ComApi.InwOaProperty opt in
		options.Properties())
{
	if (opt.name == "export.image.format")
		opt.value = "lcodpexpng";
}
string snapshot = @"C:\snapshot.png";
//export the viewpoint to the image
oState.DriveIOPlugin("lcodpimage", snapshot, options);
System.Drawing.Bitmap oBitmap = new System.Drawing.Bitmap(snapshot);
System.IO.MemoryStream ImageStream = new System.IO.MemoryStream();
oBitmap.Save(ImageStream, System.Drawing.Imaging.ImageFormat.Jpeg);
```