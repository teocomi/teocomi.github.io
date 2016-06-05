---
layout: post
title: "Update WPF ProgessBar in Revit loop"
date: 2015-04-24 20:59
categories: [C#, Revit API]
tags: [C#, delegate, dispatcher, loop, progress, progressbar, Revit, Revit API, WPF]
---
In WPF, the ProgressBar control is a great control for showing the progress of an operation. If you have already used it in a non Revit context, you probably know that in order to update the UI during a lengthy task [you need to have this logic on a different thread than the main one](http://www.wpf-tutorial.com/misc-controls/the-progressbar-control/).

But the [Revit API cannot be used in multithreading](http://thebuildingcoder.typepad.com/blog/2011/06/no-multithreading-in-revit.html).

![progress](/assets/2015/04/progress.png)

If you try to set up a BackgroundWorker or a second thread to accomplish you long lasting operation, you will most likely end up having Revit to crash without notice.

A simple solution to allow the ProgressBar to update is the use of a [Dispatcher](https://msdn.microsoft.com/en-us/library/system.windows.threading.dispatcher%28v=vs.110%29.aspx):
[code lang="csharp"]
//set up a delegate    
private delegate void ProgressBarDelegate();

//long busy loop
private void CreateAThousandBuildings()
{
  progressBar.IsIndeterminate = false;
  progressBar.Maximum = 1000;
  progressBar.Minimum = 0;

  for (var i = 0; i < 1000; i++)
  {
    progressBar.Dispatcher.Invoke(new ProgressBarDelegate(UpdateProgress), DispatcherPriority.Background);
    //Create a Building...
    //...
  }
}

//update the progress bar
private void UpdateProgress()
{
  progressBar.Value += 1;
}
[/code]  
