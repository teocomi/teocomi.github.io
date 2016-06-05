---
layout: post
title: "Revit API 2013 get UniqueId from IfcGuid and from Guid"
date: 2013-06-03 09:44
categories: [Revit 2013 API]
tags: [GUID, IFC, IfcGuid, LINQ, Revit API, SMC, Solibri, UniqueId]
---
As you can read from [Jeremy's blog](http://thebuildingcoder.typepad.com/blog/2009/02/uniqueid-dwf-and-ifc-guid.html) there is not a straight way to convert an IfcGuid or a normal Guid to Revit's UniqueId. But given an UniqueId it is possible to convert it to the two other formats.
So a way to find out the UniqueId related to a specific IfcGuid  or Guid is to check all Revit's elements.

Following I'll show how I did retrive UniqueId values from a list of IfcGuids inside an XML file.
The IfcGuids where formatted like this, but they could also have just been in an array of strings and so on. 

```xml
<Component IfcGuid="29n2CJF3v7NeNLN8wcGGNR">
  <OriginatingSystem>Autodesk Revit 2013</OriginatingSystem>
</Component>
<Component IfcGuid="0cnYh7HMPD3vwPoG73hck9">
  <OriginatingSystem>Autodesk Revit 2013</OriginatingSystem>
</Component>
```

To retrieve all Revit's element I use:

```csharp
FilteredElementCollector collector = new FilteredElementCollector(doc, uidoc.ActiveView.Id).WhereElementIsNotElementType(); //filters elements visible in current view only
ICollection<Element> collection = collector.ToElements();
Element[] collectionA = collection.ToArray(); //store all the elements in an Array
```
To convert get the elment IFC GUID I use:

```csharp
string ifcguid = ExporterIFCUtils.CreateGUID(el); //remember to be using Autodesk.Revit.DB.IFC;
```

I use LINQ to quickly query the XML file and compare the element's IFC GUID to the *IfcGuid* value:

```csharp
 IEnumerable<string> correspondingElems = from item in viewportsA[0].Element("VisualizationInfo").Elements("Components").Elements("Component").Attributes("IfcGuid")
                                          where ifcguid == item.Value
                                          select item.Value;
```

So the full code I used is:

```csharp
FilteredElementCollector collector = new FilteredElementCollector(doc, uidoc.ActiveView.Id).WhereElementIsNotElementType();
ICollection<Element> collection = collector.ToElements();
Element[] collectionA = collection.ToArray();

foreach (Element el in collectionA)
{
	//LINQ
	string ifcguid = ExporterIFCUtils.CreateGUID(el);
	IEnumerable<string> correspondingElems = from item in viewportsA[0].Element("VisualizationInfo").Elements("Components").Elements("Component").Attributes("IfcGuid")
												where ifcguid == item.Value
												select item.Value;
	if (correspondingElems.Count() != 0)
	{
		Print(correspondingElems.First() + " = " + el.UniqueId + "\n");
	}  
}
```

Output will be something like this:

```
29n2CJF3v7NeNLN8wcGGNR = 6b6b5b77-8d56-42ca-a1f0-8cef986eb32e-00022636
0cnYh7HMPD3vwPoG73hck9 = 6b6b5b77-8d56-42ca-a1f0-8cef986eb32e-00022641
```

Similar approach can be used knowing the Guid.
