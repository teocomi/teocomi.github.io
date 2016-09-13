---
published: true
layout: post
date: 2016-09-13
categories:
  - unity
tags:
  - unity
  - git
---

[Version control in Unity](https://docs.unity3d.com/Manual/VersionControl.html) can be done using specific solutions for game engines as [Perforce](https://www.perforce.com/downloads/helix) and [Plastic SMC](https://www.plasticscm.com/). But in case you'd rather use a more traditional approach, with Git, here below I'm sharing two gists that can be useful.

The `.gitattributes` file is essential if your repository supports [Git Large File Storage](https://git-lfs.github.com/) (LFS), and `.gitignore` will prevent a lot of rubbish from being versioned:

{% gist teocomi/e20008cdf5b13dea228bdcfa72a09390 %}

{% gist teocomi/fbd014c26c63c7c1055d025e2339dea7 %}