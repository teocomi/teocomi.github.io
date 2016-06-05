---
layout: post
title: "Free BCF Exporter for Navisworks Manage 2014"
date: 2013-12-13 17:05
categories: [App Updates, BCF Navisworks Plugin]
tags: [BCF, clash, export, navisworks]
---
[![case_final_logo_type](/assets/2013/12/case_final_logo_type.png)](http://localhost/matteocominetti/wp-admin/case-inc.com)        [![Navis2BCF3png](/assets/2013/12/Navis2BCF3png.png)](http://apps.case-inc.com/content/free-bcf-exporter-navisworks-manage-2014)

[CASE](case-inc.com) has just release a free Navisworks plugin to export BCF files, check it out on the [CASE App page](http://apps.case-inc.com/content/free-bcf-exporter-navisworks-manage-2014) or just install it from the [CASE Addin Manager](http://apps.case-inc.com/content/add-manager)!

**Description:**
BCF Exporter allows to export issues found in a Navisworks project according to the BIM Collaboration Format standard by BuildingSMART.
BCF Exporter will export the Saved Viewpoints of the current project and the associated comments to a single BCF report file (.bcfzip).

**Usage:**
1. create the Viewpoints
2. add comments to the VIewpoints
3. set the desired images size from Navisworks
4. export the Saved Viewpoints as BCF issues

**1. Viewpoint creation:**
Open the Navisworks “Saved Viewpoints” panel by checking View>Windows>Saved Viewpoints. Viewpoints can be either generated automatically from a Clash Detective result: from the “Clash Detective” panel on the “Report” tab set the “Report Format” to “As viewpoints” and click “Write Report”. Or manually by right-clicking in the “Saved Viewpoints” panel and then clicking “Save Viewpoint”.

**2. Comments creation:**
Open the Navisworks “Comments” panel by checking View>Windows>Comments. Comments can be added by right-clicking on a Saved VIewpoint and then clicking “Add Comment”. Comments can also be automatically generated during the generation of the clash result.

**3. Setting the desired image size:**
By default the snapshot of the BCF Issues will only be 256x256px becaus of a hidden Navisworks setting. In order to change that click on the main Navisworks menu button and then holding the SHIFT key click “Options” (this will give you access to the advanced Options Editor). From here click Export>lcodpimage and set desired height and width.

**4. Export to BCF:**
From the “CASE” ribbon panel click on “BCF Exporter”, to update the list of issues after editing the Saved Viewpoints click “Refresh” on the “BCF Exporter” panel. The Refresh button will take all the Saved Viewpoints and flatten them to a list displaying Title and number of comments.To exclude one or more issues from the BCF report select them and click “Remove”. To finally export all the issues to one BCF report click “Export Issues »”.
