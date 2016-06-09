---
layout: post
title: "BIM Collaboration Format 2.0 (BCF)"
date: 2013-06-27 10:45
categories: [BCF]
tags: [BCF, BIM, buildingSMART, IFC]
---
This is a follow up to my post on [BIM Collaboration Format](http://localhost/matteocominetti/bim-collaboration-format/). I've gathered here some information found online, special thanks to Lars Bjørkhaug and Rasso Steinmann on LinkedIn.

buildingSMART-ISG (Implementer Support Group) has created a task group for defining BCF 2.0 and the result of this work will be provided before the next ISG meeting in Prague, on the 9 of September 2013. There are lots of improvements proposed, most important are:

*   Support for multiple snapshots/viewpoints on topics.
*   Improved control of colour, visibility and colour was added to visualization. This is a difficult issue as you never know how many models that might be open at the same time. The topic might have been created while two models where opened and is later "covered" by a third domain model.
*   New support for bitmaps on viewpoints. This is to allow for overlays of text, sketches etc in viewpoints.
*   Support for "BimSnipplets". These are in effect small ifcXML, ifc2x4 or ifc4 files. This is to support eg. provision for voids.
*   Support for "DocumentReference". Could refer to a file in the topic folder or to an URL.
*   Email added to comments for better identification of authors.
*   A topic comment can now have the status of open or closed. If more granularity is needed "VerbalStatus" can be used. A set of proposed status lists might be provided with the documentation of the format.
*   minor optional improvements like the possibility to index topics was also added.
The improved BCF 2.0 will be backwards compatible with BCF 1.0. The work is being documented on ISG Jira with participants from Catenda, DDS, Iabi, ISG, Solibri and Tekla.

A second task group currently is working on a standardised webservice, so that BCF could be synchronised automatically among various applications and platforms, in future.
