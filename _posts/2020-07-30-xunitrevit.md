---
title: "XUnitRevit: a test runner for Revit"
published: true
layout: post
date: 2020-07-30
categories:
  - test
  - revit
  - xunit
tags:
  - test
  - revit
  - xunit
---

Originally posted on: [https://speckle.systems/blog/xunitrevit](https://speckle.systems/blog/xunitrevit)



Unit tests are one of those things in life that you try to avoid for as long as you can but, eventually, you surrender to and start to accept. With the release of Speckle 2.0 we're aiming at >90% test coverage, and we are doing everything we can to get there. This is why we developed a set of open source tools to help us run unit tests inside Revit.

Prior beginning this effort we did a preliminary search and found a couple of existing solutions:

- Dynamo's [RevitTestFramework](https://github.com/DynamoDS/RevitTestFramework)
- Arup's [RvtUnit](https://github.com/ArupAus/RvtUnit)

These either weren't really fit for our needs or hadn't been updated in a very long time, so we decided to develop our own. So here it is, we're pleased to announce: 

**[xUnitRevit](hhttps://github.com/specklesystems/xunit-Revit)** { .display-1 .font-weight-thin .text-xs-center .text-xs-center .my-5}

an xUnit runner for Revit. This little tool has been invaluable for us as we are currently developing the Revit connector for Speckle 2.0, it lets us test conversion routines to and from Speckkle in a breeze. We hope you can find it useful too!

![xunit2](https://user-images.githubusercontent.com/2679513/88958499-77809980-d298-11ea-84b6-e0749790ffc5.gif)

The runner is made up by three parts:

- a general purpose WPF xUnit runner
- a Revit addin
- a utility library to help pass Revit data to you test libraries when running the tests

## WPF xUnit runner: speckle.xunit.runner.wpf

In order to run, manage and visually explore tests we needed an xUnit runner with some sort of UI that could be displayed in Revit. We came across an existing effort [xunit.runner.wpf](https://github.com/Pilchie/xunit.runner.wpf), but since out of the box it didn't work when loaded inside of Revit we had to fork it and tweak it to load assemblies via reflection.

Our fork is hosted at [speckle.xunit.runner.wpf](hhttps://github.com/specklesystems/speckle.xunit.runner.wpf). 

We also made it into a NuGet package you can easily reference and use to develop xUnit runners for other host applications:

- [https://www.nuget.org/packages/speckle.xunit.runner.wpf/](https://www.nuget.org/packages/speckle.xunit.runner.wpf/)

## Revit Addin: xUnitRevit

We then made a simple Revit addin that references `speckle.xunit.runner.wpf` and exposes its WPF interface form within Revit: [xUnitRevit](hhttps://github.com/specklesystems/xUnitRevit)

The addin has already been configured to have build configurations for Revit 2019, 2020 and 2021, so you can just clone the repo and click debug/build to test it. 

More info on how to use it in the project readme.

## Utility library: xUnitRevitUtils

This is a very simple class library that contains methods and data structures to help you access Revit data and methods from your tests. For instance you can use it to trigger opening and closing of files, retrieving the Revit Document, running transactions etc...

This library is part of the [xUnitRevit](hhttps://github.com/specklesystems/xUnitRevit) project and can be referenced via NuGet for the latest Revit versions: 

- [https://www.nuget.org/packages/xUnitRevitUtils.2019/](https://www.nuget.org/packages/xUnitRevitUtils.2019/)
- [https://www.nuget.org/packages/xUnitRevitUtils.2020/](https://www.nuget.org/packages/xUnitRevitUtils.2020/)
- [https://www.nuget.org/packages/xUnitRevitUtils.2021/](https://www.nuget.org/packages/xUnitRevitUtils.2021/)

More on how to use it on its readme file.

## Getting started

To get started please visit the [xUnitRevit](hhttps://github.com/specklesystems/xUnitRevit) repo and read the docs! There are very few steps required to create your first unit tests:

- build/install xUnitRevit
- create a test library
- start Revit, launch the xUnitRevit addin and select the test library
- done! Add a star ⭐ to our repo if it was useful 😉

### Sample Tests Library

To help you get started even faster, we've also made a [sample test library](hhttps://github.com/specklesystems/xUnitRevit/tree/master/SampleLibrary). Check it out!