---
layout: post
title: "Fastboot Xperia drivers on Windows 8"
date: 2013-06-14 18:49
categories: [Android]
tags: [adb, driver, fastboot, flashtool, install, windows 8, xperia]
---
If you have updated to Windows 8 you might have had difficulties installing Fastboot and adb drivers for Xperia devices, here a way to do it thanks to [aslike2](http://forum.xda-developers.com/showpost.php?p=38774478&postcount=7) on [XDA](http://forum.xda-developers.com/showthread.php?t=2170114):

1.  <span style="line-height: 13px;">download [flashtoo](http://androxyde.github.io/)l and install
</span>
2.  <span style="line-height: 13px;">open cmd as administrator and type "bcdedit /set testsigning on"</span>
3.  <span style="line-height: 13px;"> restart PC
</span>
4.  <span style="line-height: 13px;">install driver in the flashtool "drivers" folder, check fastboot, agree when prompts
</span>
5.  <span style="line-height: 13px;">type "bcdedit /set testsigning off" in cmd and restart PC
</span>
6.  <span style="line-height: 13px;">go to "x10flasher_lib" folder flash whatever you want
</span>
