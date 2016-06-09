---
layout: post
title: "Anti-Spoof on your Google Apps email"
date: 2012-12-23 14:05
categories: [Tips&amp;Tricks]
tags: [email, spoofing]
---
I recently started receiving some *Delivery Status Notification* or *automatic response* emails from messages I have never sent. Expanding the details I noticed that they were all replies to emails sent by addresses like this: E7F35AED@mydomain.com (were mydomain.com is actually a domain of mine I use under Google Apps). I was receiving them because I set my own email *myemail@mydomain.com* as a *[catch-all address](http://support.google.com/a/bin/answer.py?hl=en&answer=33962)* so that all emails sent to not existing addresses *@mydomain.com* would be forwarded to my main email address.

So actually I was just a victim of [Spoofing](https://en.wikipedia.org/wiki/E-mail_spoofing) and I could realize that only thanks to the catch-all address.

Googling a bit around I found out that there are mainly 3 methods to prevent this phenomenon and add an authentication step to your sent emails:

*   [SPF records](http://support.google.com/a/bin/answer.py?hl=en&answer=33786)
*   [Authenticate email with DKIM](https://support.google.com/a/bin/answer.py?hl=en&answer=174124)
*   [DMARC](http://support.google.com/a/bin/answer.py?hl=en&answer=2466580)
I personally suggest everybody having a Google apps domain turning on the Catch-all address and activating the first two methods, the third is quite sophisticated and might be needed only in some situations.

Good luck, hope it works!
