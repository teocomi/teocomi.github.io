---
layout: post
title: "Revit Add-In Manager -  External Tools"
date: 2013-06-03 11:45
categories: [Revit API]
tags: [add-in manager, debug, external tools, Revit API, Revit SDK]
---
I always forget how and where to get the Revit Add-In Manager, that "External tools" ribbon in your Add-Ins tab. Essential tool if you want to [debug your Add-In without restarting Revit](http://thebuildingcoder.typepad.com/blog/2011/05/debugging-an-add-in-without-restarting-revit.html) each time. It is as simple as it follows:

*   <span style="line-height: 13px;">download and install the [Revit SDK](http://usa.autodesk.com/adsk/servlet/index?siteID=123112&id=2484975) you need (or see below on how to get it from you installation package)</span>
*   in the new folder *C:\Revit 2013 SDK\Add-In Manager* (or similar) you will find the file *Add-In Manager for Autodesk Revit 2013.msi*, now just install it
**N.B.**

The SDK is included in every Revit product.  There are two ways to install the Revit SDK:

*   From the main page of the Revit installer, click “Install Tools and Utilities” and choose “Revit Software Development Kit”.
*   Alternatively, you can also find the SDK in the extraction folder, under: *<extraction folder>\support\SDK\RevitSDK.exe*
