---
published: true
layout: post
date: 2016-10-30
categories:
  - dynamo
tags:
  - node
  - input
  - variable
---

Some custom Dynamo nodes need to handle inputs and outputs of variable nesting length. In [python this can be done using](https://forum.dynamobim.com/t/how-to-handle-variable-input-list-length-nesting-in-custom-nodes-python/3192/5) `var[]..[]`, but how to do it in C#?

To achieve this on the output of a node it is very easy as it's done automatically when using the `MultiReturn` attribute, [see the docs](https://github.com/DynamoDS/Dynamo/wiki/Zero-Touch-Plugin-Development#returning-multiple-values).

On the inputs, instead, the secret is to use the `[ArbitraryDimensionArrayImport] object item` attribute, [see a sample node](https://github.com/DynamoDS/Dynamo/blob/master/src/Libraries/CoreNodes/List.cs#L342).

```csharp

public static IList AddItemToEnd([ArbitraryDimensionArrayImport] object item, IList list)
        {
            return new ArrayList(list) //Clone original list
            {
                item //Add item to the end of cloned list.
            };
        }

```

Thanks to [Peter for revealing this](https://twitter.com/ptrbyr/status/765968126261493760)!



