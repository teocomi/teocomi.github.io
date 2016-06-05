---
layout: post
title: "Switch existing Visual Studio project type from WinForms to WPF"
date: 2015-04-29 13:27
categories: [C#]
tags: [project, type, visual studio, WinForm, WPF]
---
It may happen that you are working on a Visual Studio project that was initially set up for Windows Forms, and now you want to insert some cool WPF controls, but these won't show up when clicking the "Add..." button.

A simple way to do so is to change the *ProjectTypeGuids* in your *.csproj* file.

Open the *.csproj* file in a text editor, and add the following line in the first *PropertyGroup* element:

[code lang="xml"]
<ProjectTypeGuids>{60dc8134-eba5-43b8-bcc9-bb4bc16c2548};{FAE04EC0-301F-11D3-BF4B-00C04F79EFBC}</ProjectTypeGuids>
[/code]

As shown here:

[![csproj](/assets/2015/04/csproj-470x154.png)](/assets/2015/04/csproj.png)

Now when you click the Add button you will have both WPF and WinForm controls to choose from:

[![add](/assets/2015/04/add-470x324.png)](/assets/2015/04/add.png)

**N.B.**
The Project Type GUIDS I'm usign refer to Visual Studio Professional 2013, if you are using another version they might differ. In this case just create a new blank WPF project and snoop its *.csproj* file to see the correct GUIDS to use.
