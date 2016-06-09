---
layout: post
title: "Monitoring the Construction Progress and Getting It Right."
date: 2014-12-06 18:38
categories: [bim, Navisworks]
tags: [construction, navisworks, report]
---
[Source](http://www.case-inc.com/blog/monitoring-construction-progress-and-getting-it-right "Permalink to Monitoring the Construction Progress and Getting It Right.")

**Earlier this year**, a facade contractor asked CASE to help with the sequencing of a curtain wall structure. The whole wall system contained more than 10,000 brackets, anchors, parapets, glass panels, and steel installations. Each of these elements required specific installation process and time.

Anyone in the construction industry will be familiar with the great number of factors that can affect the construction sequence. Nothing quite goes to plan. To keep up with the unexpected changes, someone on the construction site has to constantly report to the project managers with the current status of the work. At the moment, there is no automated way to do this. Emails and phone calls have been the de-facto way for a long time, but information is easily lost in these ad-hoc networks.

CASE was approached by the facade contractor and asked whether we could help their project managers get a better, more reliable understanding of how on site schedule changes are affecting the overall project. In particular, they desired a daily report of the construction status outlining the elements installed, the elements that were delayed, and percentage of project completion. At this time, someone at the company was already tracking elements of what was installed on a daily basis into [Autodesk BIM 360 Field][1], a "construction field management software that combines mobile technologies with cloud-based field data collaboration and reporting." This was our only constraint and starting point. Using a combination of [Autodesk Naviswork][2] and Excel, CASE produced a 4D BIM model and schedule to visualize the progression of construction activities through the lifetime of the project. By doing so, this allowed the project managers to ensure that construction could proceed at the optimal pace without any interferences.

Autodesk BIM 360 Field features an "equipment list," a database of a project's elements that can quickly be updated via a web interface or a mobile app. Our first move was to use an existing Excel schedule to populate BIM 360 Field's equipment list. The batch import can be performed fairly easily by uploading a correctly formatted Excel file. Several custom fields were added to the equipment list as: "Planned installation date", "Actual installation date", "GUID", "Revision"… The "Actual Installation date" was the field that the person on site had to update daily. Each row consisted of a piece of equipment and was identified via a Unique ID (GUID).

![][3]Sample Equipment list with custom fields populated![][4]Import Equipment Dialog- Autodesk BIM 360 Field

Although BIM 360 Field offers some integrated reporting capabilities, none of these met our client's needs: imagine a table with more than 10,000 rows, that's great for in-detail analysis but not very helpful as a daily report.

To overcome this limitation, we opted to use BIM 360 Field REST API and to create our own reporting system. Our goal was to show only relevant information and high-level metrics about the construction process. Also, out team wanted the ability to update the schedule over time using revisions to see how everything went compared to what was initially planned. We didn't want the client to install any new software; it had to happen seamlessly in the background and be viewable at any time through an online interface. This meant that the client would have access to view 3D model of the building displaying the current and future status of the construction together with charts and metrics.

There are different technologies out there for embedding and visualizing content in a web browser. The most promising was [BIM 360 Glue][5] because of its integration with Field. Unfortunately, Glue's API didn't have the capabilities we wanted. Other solutions we looked at were [BIM+][6] and the OpenSource [BIM Surfer][6], but neither would have been applied for our case.

Finally, we opted for a more obvious solution, one that guaranteed to achieve exactly what we wanted. We decided to use Navisworks and its powerful API due to the fact that we already had an existing model. The model was cleverly organized in "Selections Sets". Each contained a set of elements with a GUID corresponding to a row in the Excel schedule and the Field's equipment list. This allowed us to have a one-to-one correlation between the online platform (BIM 360 Field) and the desktop tool (Navisworks).

![][7]Autodesk Navisworks Model

Basically, the whole process of recording activity on site and sending it to the project managers consisted of the following steps:

1. An onsite person updates the BIM 360 Field schedule (or equipment list)
2. This information is retrieved using BIM 360 Field REST API
3. This information is processed to see which elements are on schedule and which are not
4. The Navisworks model is updated using Navisworks API to display the construction status and changes
5. Images of this status and additional tabular information are uploaded/embedded online
6. Client receives notification of the new report, without the hassle of steps 2-5
![][8] The long version![][9]The short version

At this point, the easiest approach was to squeeze Navisworks API to handle most of the process. A custom add-in was written to retrieve the equipment list (using the free [RestSharp][10] library), all the elements "Planned installation dates" were compared against their "Actual installation date" (if any) and different statuses were assigned; installed on time, installed late, installed ahead of time, lagging (should be installed but isn't yet) and pending (will be installed in the future). All the "Selection Sets" within Navisworks were then selected and colored depending on their status. We could also generate anticipations of how the model would look like in 3 and 6 weeks (step #3). Watching it in action, it was impressive to see live changes on the model as the data synced Navisworks Sets to Field elements. The final result left a few things desired, since the camera always viewed the model from the same position, one could not see all the changes that were made.

Using a bit of math and a few more lines of code, we automatically set the camera location around the model according to the last installed elements and create a virtual circumference around the model by rotating the camera and point it at specific elements. The views were then exported as images in a temporary folder (step #4).

After completing steps #2, #3 and #4, we had to find an easy way to embed the rastered images online along with some charts containing high-level metrics about the project from our Navisworks add-in. Having used 2 different APIs, we couldn't resist using a third one! We opted to use [Drupal][11], an OpenSource CMS to build a simple website to host this information, it's highly customizable and powerful. It took just a short time to set up a Drupal REST API module and a nice [bootstrap-powered][12] theme so that the main page would display a list of completed reports, and each of these would bring you to the detailed report.

Each report showed metrics of the previous day and these included:

* revision number
* number of weeks past/left/total
* total project percent complete
* plan percent complete of the last 7 days
* plan percent complete of the last day
* number of elements Done Early, Done On Time, Done Late, Pending and Lagging since the beginning of the project, in the last 7 days and in the last day
* images of the elements scheduled to date, in the last 7 days and in the last day
* look-ahead images of 2 and 6 weeks
* weather condition of the day
* comments
![][13]Report List - Images are obfuscated

![][14]

All charts were made using [d3.js][15],in order to display weather information (there are a ton of scripts to display forecasts but not many that show past events) we used [Wunderground Historical Weather Data][16].

Each time the add-in was executed: information was retrieved from BIM 360 Field, the model was updated, snapshots were exported from Navisworks and uploaded to Drupal, a new node (post) was created in Drupal and the client was notified by mail of a new report.

Since all the above had to run automatically in the background, without having our client installing any software, the last step was to automate the execution of the add-in and find a place to host our "Navisworks server". We set up a simple Windows script that would:

1. Launch Navisworks
2. Open the model
3. Execute the addin
4. Log possible errors
5. Notify by email of eventual errors
6. Close Navisworks

The script was triggered during every startup of the Windows machine using Windows Tasks. We decided to host our instance of Navisworks, the add-in, and the script on an [Amazon EC2][17] server. The server would boot up daily tp create the report and then turn off. The automatic boot and shutdown of the machine was done using a service named [Skeddly][18]. Since the virtual machine is up and running only for an hour a day (actually the report takes just a few minutes), the cost of the hosting is extremely limited and uptime has been excellent.

Looking back at this project now, there is still potential to take this idea further. Ideally, we would create a single application that handles everything without having to rely on so many different APIs and softwares. But despite the technological interrelationships, the final outcome of the whole reporting system was extremely positive. For the first time, our client has been able to receive detailed and precise information about the construction progress on a regular basis. At a glance, they can see if it was ahead or behind schedule, the project percentage completed, the number of weeks left, how many items were lagging, what was the cause of the delays, and so on. They also have insight on what parts were installed and when. The metrics within each report not only served as daily updates, but at the end of the project became a documentation of its construction history, a resource that could not exist otherwise.

For CASE, this is a typical scenario where _technology_ leverages the _data_ of our _buildings_ and the _information_ that comes out of if can help us make better _decisions._

[1]: http://www.autodesk.co.uk/products/bim-360-field/overview
[2]: http://www.autodesk.co.uk/products/navisworks/overview
[3]: http://www.case-inc.com/sites/default/files/styles/inline_image/public/2014-10-30-12_59_15-Autodesk-BIM-360-Field.png%3Fitok%3D-WjNCQ7T
[4]: http://www.case-inc.com/sites/default/files/styles/inline_image/public/2014-10-30-12_55_57-Autodesk-BIM-360-Field.png%3Fitok%3DycoQzEM1
[5]: http://www.autodesk.co.uk/products/bim-360-glue/overview
[6]: https://www.bimplus.net/
[7]: http://www.case-inc.com/sites/default/files/styles/inline_image/public/2014-10-30-13_17_24-MobilSequencing2014-02-28grid.nwd-Autodesk-Navisworks-Manage-2015-NOT-FOR-RES.png%3Fitok%3DarMrb3rD
[8]: http://www.case-inc.com/sites/default/files/styles/inline_image/public/schema-extended.jpg%3Fitok%3Dfs-PyQXH
[9]: http://www.case-inc.com/sites/default/files/styles/inline_image/public/schema-compact.jpg%3Fitok%3DGDpPHAzt
[10]: http://restsharp.org/
[11]: https://www.drupal.org/
[12]: http://getbootstrap.com/
[13]: http://www.case-inc.com/sites/default/files/styles/inline_image/public/2014-10-30-14_38_10-Field-Report-_-Powered-by-CASE.png%3Fitok%3Dj8Zqj3Z2
[14]: http://www.case-inc.com/sites/default/files/styles/inline_image/public/download.png%3Fitok%3DZ6CdA9KQ
[15]: http://d3js.org/
[16]: http://www.wunderground.com/history/
[17]: http://aws.amazon.com/ec2/
[18]: http://www.skeddly.com/