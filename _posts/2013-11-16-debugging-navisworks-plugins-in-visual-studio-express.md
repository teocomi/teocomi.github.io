---
layout: post
title: "Debugging Navisworks Plugins in Visual Studio Express"
date: 2013-11-16 19:41
categories: [Navisworks API]
tags: []
---
If you have been programming with Revit APIs you probably already know what we are going to do since the process is very similar to [Debugging Revit APIs in Visual Studio Express](http://thebuildingcoder.typepad.com/blog/2010/07/debugging-in-visual-studio-2010-express.html).

Just follow the article [How to Debug/Run Navisworks 2013 API Programs](http://lezhang.net/2013/11/12/how-to-debugrun-navisworks-2013-api-programs/), if you are using an Express version of Visual Studio you won't be able to set a *“Start external program”* action from within the program. But with a simple workaround you can obtain the same result.

1.  Locate the .csproj file of the project you are working on
2.  Edit it in a text file editor
3.  Before each *</PropertyGroup>* tag relevant to your scope add the following:

```xml
<StartAction>Program</StartAction>
<StartProgram>C:\Program Files\Autodesk\Navisworks Manage 2014\Roamer.exe</StartProgram>
<StartArguments>PATH TO YOUR NWF FILE TO BE OPENED AUTOMATICALLY (optional)</StartArguments>
```

Eventually adjust the path to the Roamer.exe file, and you're ready to go!
