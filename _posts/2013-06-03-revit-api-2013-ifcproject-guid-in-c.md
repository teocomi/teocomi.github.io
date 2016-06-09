---
layout: post
title: "Revit API 2013 IfcProject Guid in C#"
date: 2013-06-03 09:46
categories: [Revit 2013 API]
tags: [C#, GUID, IFC, Revit]
---
Using Revit API version 2013 in order to get the IfcGuid of the current project it is possible to use the following code:

```csharp
UIDocument uidoc = commandData.Application.ActiveUIDocument;
Document doc = uidoc.Document;
string ifcproject = ExporterIFCUtils.CreateProjectLevelGUID(doc, Autodesk.Revit.DB.IFC.IFCProjectLevelGUIDType.Project);
```

The returned Guid will be the same, for instance, of an IFC file used in Solibri. Remember to add this to your Namespaces:

```csharp
using Autodesk.Revit.DB.IFC;

```
