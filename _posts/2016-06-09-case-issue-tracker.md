---
layout: post
title: "CASE Issue Tracker"
date: 2016-06-11
categories: [tools]
tags: [case, issue tracker]
---


> **UPDATE 04/02/2018:** The WeWork repository on GitHub seem to have been taken down. Check the Arup fork of the Issue Tracker which is currently maintained and has additional integrations: https://github.com/ArupAus/issue-tracker 

You might have heard that recently [WeWork has open sourced apps developed by CASE](https://www.wework.com/es-MX/blog/posts/wework-open-sources-case-apps "WeWork has open sourced apps developed by CASE"). One of my first dev projects at [CASE](http://case-inc.com) consisted in taking what I had learned about [BCF](http://teocomi.com/tags/#bcf) and apply it on real projects. At the time [BCFier](http://bcfier.com), a Revit addin to exchange BCF files I developed as part of my thesis in 2012, was still very primitive but it actually became the foundation of the [CASE Issue Tracker](https://github.com/WeConnect/issue-tracker) (CIT).

> The Issue Tracker is an advanced system that tracks building issues similar to the way issues are tracked in the software world. It was developed internally at CASE and open sourced through WeWork.

It took several iterations, and the great guidance and expertise of Federico Negro and Michael McCune, but after just a few months we had a great tool, something still unique in its type: an issue tracking system for the building industry. Its use quickly took over almost all internal projects where teams could finally create, manage and systematically close all found issues.  
CIT was the first application that could connect Revit, Navisworks, Solibri and Tekla together and to a webserver, via the use of a quite new BCF format.

![](https://github.com/WeConnect/issue-tracker/raw/master/Assets/workflow.jpg)

Not only we created an amazing communication layer between these platforms, but we gave people the possibility to finally integrate proper issue tracking workflows, as in the software world in the AEC one.  

You should really read my friend Michael's posts on issue tracking on his blog [collectiveBIM](http://teocomi.com/the-future-of-issue-tracking-for-the-aec-collectivebim/ "collectiveBIM") that really explain the circumstances and the need for this to happen.

![](https://github.com/WeConnect/issue-tracker/raw/master/Assets/jirapanel.png)

Despite BCF's immaturity and the several API limitations, CIT was really helping our internal teams to the point that [one of our main clients also decided to adopt it](https://github.com/ArupAus/issue-tracker) on several projects, CIT was really proving itself.

Finally the day has come that CIT is **open source**! My hope is to integrate it with BCFier and give the industry an even better tool.

Start contributing on the [GitHub repo](https://github.com/WeConnect/issue-tracker).
For more information on the Issue Tracker, check out this PDF [CIT-CASE Issue Tracker.pdf](https://github.com/WeConnect/issue-tracker/raw/master/Assets/CIT-%20CASE%20Issue%20Tracker%2020150129.pdf).

For help on customizing it or setting it up, you can contact me at: [hello@teocomi.com](mailto:hello@teocomi.com "hello@teocomi.com").