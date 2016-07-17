---
published: false
layout: post
date: 2016-07-17T00:00:00.000Z
categories:
  - dynamo
tags:
  - dynamo
  - custom node
---
[Dynamo](http://dynamobim.org/) is a really powerful tool, and it becomes even more powerful when extended through custom nodes. If you have some basic knowledge of .NET adding you own functionalities is actually [really simple](https://github.com/DynamoDS/Dynamo/wiki/How-To-Create-Your-Own-Nodes), the so called [Zero Touch Plugin Development](https://github.com/DynamoDS/Dynamo/wiki/Zero-Touch-Plugin-Development) lets you run any public static method in a dll from within Dynamo, isn't it great?

Dynamo can also be customized by "proper" nodes that extend the ```:NodeModel``` class, these are quite more complicated to write, but allow for custom UI and other powerful features. I have written a sample Custom Node using this approach, as the documentation is not very extensive, check out the [Hello Dynamo repo](https://github.com/teocomi/HelloDynamo). 

![]({{site.baseurl}}/https://cloud.githubusercontent.com/assets/2679513/16582748/be9e36e4-42a8-11e6-8c0a-429c0caf0ef1.png)

If you decide to go this route, please mind that the main function of a NodeModel, called ```BuildOutputAst``` does not calculate the output of the node itself, but instead it has to pass execution to another static function (in the form of a ```AstFactory.BuildFunctionCall```) that **has to live in a separate assembly**! As a matter of fact, whithin the NodeModel you won't even be able to easily access the input values, it took me really a long time to figure this out. On the other hand, custom nodes let you implement a WPF UI very easily, check the [HelloGui.cs](https://github.com/teocomi/HelloDynamo/blob/master/HelloDynamo/HelloNodeModel/HelloGui.cs) class for how to do this.