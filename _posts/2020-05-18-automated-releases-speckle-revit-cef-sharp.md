---
title: "How we automated releases of Speckle for Revit 2019, 2020 and 2021 with different versions of CefSharp"
published: true
layout: post
date: 2020-05-18
categories:
  - cef
  - revit
tags:
  - cef
  - revit
---

Originally posted on: [https://speckle.systems/blog/automated-releases-speckle-revit-cef-sharp](https://speckle.systems/blog/automated-releases-speckle-revit-cef-sharp)



The Revit API hasn’t changed much across their 2019, 2020 and 2021 releases (for better or worse 😅), but our 2019 version of Speckle for Revit still wouldn’t play nicely with the newer ones. This is because both our connector and Revit use [CefSharp](https://cefsharp.github.io/), a .NET wrapper around the [Chromium Embedded Framework (CEF)](https://bitbucket.org/chromiumembedded/cef), that allows us to create pretty UI using web frameworks.

While Revit 2019 is stuck with an old version of CefSharp 57.0.0, the other releases use version 65.0 and therefore we couldn't just reuse the same built files. Below an extract from the [Building Coder website](https://thebuildingcoder.typepad.com/blog/2018/08/revit-20191-cefsharp-forge-accelerator-in-rome.html#3) that elaborates on Revit’s use of CefSHarp:

> Revit and Autodesk add-ins use the CEFsharp library internally for several features. Some third-party add-ins do so as well. Occasionally, when different versions of the library are used, it leads to instability issues for Revit. In order to avoid version conflicts, we are clarifying what CEFsharp version is being used: Revit uses CEFsharp version 57.0.0. In addition, Revit 2019.1 now forcibly loads a version of CEFsharp prior to add-in initialization. This means that add-ins which load a different version of the CEFsharp library may not function as expected. Autodesk recommends realigning add-ins to use the version provided by and loaded by Revit. The Revit 2019.1 features that use the CEFsharp library include the new Revit Home and the Site Collaboration with Civil 3D.

The solutions we though about were to either:

- load/use CefSharp inside Speckle in a way that would not conflict with Revit’s CefSharp

or

- build a new version of Speckle for Revit that targeted CefSharp 65.0.1.

*Note: the latst release of CefSharp, at the moment of writing, is 79.1.360, not sure why Revit manages to always lag behind!*

Loading CefSharp inside Speckle in a way that would not conflict with Revit’s CefSharp is possible, and [there’s even a sample plugin](https://thebuildingcoder.typepad.com/blog/2018/08/revit-20191-cefsharp-forge-accelerator-in-rome.html#3) that does so by using [inter-process communication](https://en.wikipedia.org/wiki/Inter-process_communication) (IPC). But we felt this approach wasn’t ideal for us:

![https://user-images.githubusercontent.com/2679513/81913789-5927cd80-95c8-11ea-8730-be23ba30e6d3.png](https://user-images.githubusercontent.com/2679513/81913789-5927cd80-95c8-11ea-8730-be23ba30e6d3.png)

Whit this in mind, we felt quite comfortable transforming our SpeckleRevit project to instead output multiple releases, one for each Revit version. This is overall a better approach as it lets us reference each version of Revit individually and make sure we’re not calling deprecated methods and so on.

## Multi-version .csproj project

Changing our SpeckleRevit.csproj file to build for multiple versions of Revit is a pretty straightforward task. I think I learned this trick back in the days of [CASE Design](https://twitter.com/case_inc), and it's just a matter of adding the required [build configurations](https://docs.microsoft.com/en-us/visualstudio/ide/understanding-build-configurations?view=vs-2019) to the project and referencing the correct NuGet packages based on the selected configuration.

You can see an example of this on [my (now historical) BCFier GitHub project](https://github.com/teocomi/BCFier/blob/master/Bcfier.Revit/Bcfier.Revit.csproj#L43-L341), this approach is great as it also lets you have:

- different pre/post build actions, [example](https://github.com/teocomi/BCFier/blob/master/Bcfier.Revit/Bcfier.Revit.csproj#L432-L445)

and as well 

- [preprocessor directives](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/preprocessor-directives/), [example](https://github.com/teocomi/BCFier/blob/57b1b6a2ab44769f10bb73f45e800bb69fb7bb17/Bcfier.Revit/Entry/CmdMain.cs#L19-L40)

Compared with creating one projects for each version of Revit, you get to keep everything in one place minimising the risk of human mistakes when making changes. While it might not be ideal in every situation this approach works very well for us.

## Migrate from packages.config to PackageReference

Together with adding the new build configurations, we decided to migrate the packages.config to PackageReference in our Visual Studio project. PackageReferenceis the new default way in which .NET projects format references. The new structure is much cleaner and simpler and also prevents a lot of the c*** that CefSharp usually injects in the .csproj file.

Here's [the documentatio on how to migrate](https://docs.microsoft.com/en-us/nuget/consume-packages/migrate-packages-config-to-package-reference) and here's our .csproj file [before](https://github.com/speckleworks/SpeckleRevitReboot/blob/4b0451b3313ccfb4b6482da8c7c6e1d3fd8c9bf7/SpeckleRevitReboot/SpeckleRevit.csproj) and [after](https://github.com/speckleworks/SpeckleRevitReboot/blob/79a63e483bb239343c6bb33b2650841288680bf9/SpeckleRevitReboot/SpeckleRevit.csproj).

You can also notice the addition of some new PackageReference specific logic to reference different NuGets based on the current build configuration, the syntax is quite different for what was being used with packages.config.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!-- SWITCH REVIT NUGETS -->
<Choose>
  <When Condition="'$(Configuration)' == 'Debug2019' Or '$(Configuration)' == 'Release2019'">
    <ItemGroup>
      <PackageReference Include="Autodesk.Revit.SDK">
        <Version>2019.2.2</Version>
        <ExcludeAssets>runtime</ExcludeAssets>
      </PackageReference>
    </ItemGroup>
  </When>
  <When Condition="'$(Configuration)' == 'Debug2020' Or '$(Configuration)' == 'Release2020'">
    <ItemGroup>
      <PackageReference Include="Autodesk.Revit.SDK">
        <Version>2020.2.1</Version>
        <ExcludeAssets>runtime</ExcludeAssets>
      </PackageReference>
    </ItemGroup>
  </When>
  <When Condition="'$(Configuration)' == 'Debug2021' Or '$(Configuration)' == 'Release2021'">
    <ItemGroup>
      <PackageReference Include="Autodesk.Revit.SDK">
        <Version>2021.0.0</Version>
        <ExcludeAssets>runtime</ExcludeAssets>
      </PackageReference>
    </ItemGroup>
  </When>
</Choose>
```

## One last hurdle

![https://media.giphy.com/media/3oFzmhYBKWN79c58Ws/giphy.gif](https://media.giphy.com/media/3oFzmhYBKWN79c58Ws/giphy.gif)

Now that we have added multi-configuration to our project and migrated it to use the PackageReference structure, we still had to instruct it to use specific versions of CefSharp based on the configuration selected. **The CefSharp package is actually referenced by our [UI project](https://github.com/speckleworks/Speckleui)**, not by SpeckleRevit directly, and SpeckleUiBase is referenced as a NuGet package. This added a few complications as we either had to:

- release multiple versions of the SpeckleUiBase NuGet package

or

- reference SpeckleUiBase directly

We opted for the latter option as it was simpler, and added the Ui project as a submodule, added multiple build configurations to it and also simplified it to use the PackageReference format.

Finally, the SpeckleUiBase.csproj file required [this addition](https://github.com/speckleworks/SpeckleUi/blob/master/SpeckleUiBase/SpeckleUiBase.csproj#L117-L140), to swap between CefSharp versions (same thing we did for the Autodesk NuGets):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!-- USE CEF 57 or 65 -->
<Choose>
  <When Condition="'$(Configuration)' == 'Debug57' Or '$(Configuration)' == 'Release57' Or '$(Configuration)' == 'Release2019'">
    <ItemGroup>
      <PackageReference Include="CefSharp.Wpf">
        <Version>57.0.0</Version>
      </PackageReference>
    </ItemGroup>
  </When>
  <When Condition="'$(Configuration)' == 'Debug65' Or '$(Configuration)' == 'Release65' Or '$(Configuration)' == 'Release2020' Or '$(Configuration)' == 'Release2021'">
    <ItemGroup>
      <PackageReference Include="CefSharp.Wpf">
        <Version>65.0.1</Version>
      </PackageReference>
    </ItemGroup>
  </When>
  <Otherwise>
    <ItemGroup>
      <PackageReference Include="CefSharp.Wpf">
        <Version>79.1.360</Version>
      </PackageReference>
    </ItemGroup>
  </Otherwise>
</Choose>
```

Now in the configuration manager we can set Visual Studio to build SpeckleRevit with the Release2020 **project configuration** together with SpeckleUiBase with the Release65 **project configuration** (which uses CefSharp 65.0.1) by selecting the Release2020 **solution configuration**, and likewise for 2019 and 2020 configurations both debug and release mode.

![Untitled](https://strapi.speckle.works/uploads/Untitled_a5fffaaed5.png)

## Conclusion

It took a bit of effort but we did it, we automated build of multiple versions of SpeckleRevit targeting the correct CefSharp and Autodesk NuGets and now [our magical CI/CD pipelines](https://ci.appveyor.com/project/SpeckleWorks/specklerevitreboot) will automatically publish these versions for us. Whenever Revit 2022 will be released we'll be able to support it in a matter of minutes (if there are no breaking API changes of course). 🎉

![Untitled 1](https://strapi.speckle.works/uploads/Untitled_1_dc4eb8e64d.png)