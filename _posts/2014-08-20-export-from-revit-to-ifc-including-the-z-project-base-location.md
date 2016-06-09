---
layout: post
title: "Export from Revit to IFC including the Z Project Base Location"
date: 2014-08-20 02:54
categories: [IFC]
tags: [elevation, export, IFC, Revit]
---
There are different ways to export from Revit to IFC, here I'll show a way to preserve correctly all the Project Base Location settings of your project, especially the Elevation (Z coordinate) otherwise usually excluded.

If using Revit 2014

1.  update it to the [latest Service Pack](http://knowledge.autodesk.com/support/revit-products/downloads/caas/downloads/content/revit-2014-update-release-2.html) (very important)
2.  download and install the latest IFC Export for Revit 2014 (from [SourceForge](http://sourceforge.net/projects/ifcexporter/files/2014/) or [Autodesk Exchange](https://apps.exchange.autodesk.com/RVT/Detail/Index?id=appstore.exchange.autodesk.com%3Aifcexporterforrevit2014%3Aen))
3.  download and install the latest IFC Export Alternate UI for Revit 2014 (from [SourceForge](http://sourceforge.net/projects/ifcexporter/files/2014%20UI/) or [Autodesk Exchange](https://apps.exchange.autodesk.com/RVT/Detail/Index?id=appstore.exchange.autodesk.com%3Arevitifcexportalternateui2014%3Aen))
If using Revit 2015

1.  download and install the latest IFC 2015 (from [SourceForge](http://sourceforge.net/projects/ifcexporter/files/2015/) or [Autodesk Exchange](https://apps.exchange.autodesk.com/RVT/it/Detail/Index?id=appstore.exchange.autodesk.com%3aifc2015_windows32and64%3aen))
Now the default IFC Export Window of Revit will be replace with a more advanced one:

1.  From:* File > Export > IFC*
2.  Click "*Modify Setup..."*
3.  Check "Include IFCSITE elevation in the site locall placement origin"
Finally export!

[![Export > IFC](/assets/2014/08/2014-08-19-22_20_02--379x470.png)](/assets/2014/08/2014-08-19-22_20_02--379x470.png)

[![Check Include IFCSITE](/assets/2014/08/2014-08-19-22_47_56-Autodesk-Revit-2015-Sheet_-A001-Title-Sheet-rac_basic_sample_project.rvt_-470x198.png)](/assets/2014/08/2014-08-19-22_47_56-Autodesk-Revit-2015-Sheet_-A001-Title-Sheet-rac_basic_sample_project.rvt_-470x198.png)

 
