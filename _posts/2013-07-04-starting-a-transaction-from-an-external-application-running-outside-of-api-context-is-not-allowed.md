---
layout: post
title: "Starting a transaction from an external application running outside of API context is not allowed."
date: 2013-07-04 19:16
categories: [Revit 2014 API]
tags: [external event, Revit API, start, transaction]
---
If you got here by googling the error above you are in the right place.

As clearly stated in [Revit 2014 API](http://thebuildingcoder.typepad.com/blog/2013/04/whats-new-in-the-revit-2014-api.html) this is no more allowed:

> ### No transactions from outside threads
> 
> Calling into the Revit API from outside threads and outside modeless dialogs has never been supported, but it was not strictly prohibited, meaning there would be no immediate exceptions when someone tries to modify model from outside of the supported API workflows. That has been changed. It is no longer possible to start a transaction unless the caller is inside a legitimate API call, such as an external command, event, updater, call-back, etc. An exception will be thrown if such attempt is made.

Calling from an outside thread (including external modeless dialogs) has never been supported in Revit unless the API calls are made from a handler of an Idling Event (since 2012) or [External Event](http://wikihelp.autodesk.com/Revit/enu/2014/Help/3665-Developers/0135-Advanced135/0148-External_Events) (since 2013). Both approaches are documented in SDK samples – Look for ModelessDialog in the Samples Folder. External Events are particularly useful in modeless dialogs. They allow a clean, safe, and easy workflow.

Give this "new" restriction it is no more possible to call the API when in a 3D Perspective View because the Idling event does not get sent when in these views, nor are External Commands available (that has never been allowed, and in fact, most Revit internal commands are disabled in that mode too.)

Source [http://forums.autodesk.com](http://forums.autodesk.com/t5/Autodesk-Revit-API/Start-transaction-not-working-with-Revit-2014/td-p/3877292).
