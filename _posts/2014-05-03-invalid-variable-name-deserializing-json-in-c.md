---
layout: post
title: "Invalid variable name deserializing JSON in C#"
date: 2014-05-03 15:58
categories: [C#]
tags: [api, AvatarUrls, C#, deserialize, invalid, jira, json, name, number, response, restsharp, variable]
---
When building apps that connect to web services APIs I often use [json2csharp](http://json2csharp.com/) to automatically create C# classes from a JSON response and [RestSharp](http://restsharp.org/) (PM> Install-Package RestSharp) as REST client library. 
But recently pasting the following (from Atlassian's Jira APIs):

```
"avatarUrls": {
        "24x24": "http://www.example.com/jira/secure/useravatar?size=small&ownerId=fred",
        "16x16": "http://www.example.com/jira/secure/useravatar?size=xsmall&ownerId=fred",
        "32x32": "http://www.example.com/jira/secure/useravatar?size=medium&ownerId=fred",
        "48x48": "http://www.example.com/jira/secure/useravatar?size=large&ownerId=fred"
    },
```

Would return something like this, because C# doesn't allow variable names to start with a number:

```csharp
public class AvatarUrls
{
    public string __invalid_name__24x24 { get; set; }
    public string __invalid_name__16x16 { get; set; }
    public string __invalid_name__32x32 { get; set; }
    public string __invalid_name__48x48 { get; set; }
}
```

Since the generated name is something like *__invalid_name__24x24* the cast would not happen when deserializing the JSON response using RestSharp. A quick solution is the following:

```csharp
public class AvatarUrls
    {
        [RestSharp.Deserializers.DeserializeAs(Name = "16x16")]
        public string img16x16 { get; set; }
        [RestSharp.Deserializers.DeserializeAs(Name="24x24")]
        public string img24x24 { get; set; }
        [RestSharp.Deserializers.DeserializeAs(Name = "32x32")]
        public string img32x32 { get; set; }
        [RestSharp.Serializers.SerializeAs(Name = "48x48")]
        public string img48x48 { get; set; }
    }
```
