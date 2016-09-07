---
published: true
layout: post
date: 2016-09-07
categories:
  - dynamo
tags:
  - dynamo
---
Today I came up with a [Dynamo](http://dynamobim.org/) workflow to calculate the execution time of a series of nodes, it doesn't need any dependency, but beware as it's not sexy at all:

![elapsed-time](https://cloud.githubusercontent.com/assets/2679513/18329520/b4dc9af8-754b-11e6-86e8-ae6156bb2df8.gif)

Basically, simple `DateTime.Now` nodes do not update their values as the definition is run, so I created a dummy function called `ForceTimeUpdate` in a code block that takes in a whatever input from the definition to trigger an update of the `DateTime.Now` function. This is done by adding an empty `TimeSpan` to it, that is generated from the code block input (the `Count` and `TimeSpan.Create` functions).

In the example above it takes 750ms to generate a matrix of 20x20x20 points and to count them.

If you know of a smarter way to do the same, please post it in the comments!

Download the definition: [ElapsedTime.dyn](https://www.dropbox.com/s/d0rbeexu7bsuepa/ElapsedTime.dyn?dl=0)