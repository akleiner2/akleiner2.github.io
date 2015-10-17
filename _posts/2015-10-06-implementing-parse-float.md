---
layout:     post
title:      Implementing parseFloat
author:     Allen Kleiner
date:       2015-10-06 09:52:18
summary:    Implementing a common JavaScript function from scratch.
categories: JavaScript Interview Prep
tags:
 - JavaScript
 - Interview
---

A common interview question I've seen for all sorts of companies is to implement `parseFloat()` in some language (Python, JavaScript, etc). 
Since this is a pretty common interview question, I wanted to give my crack at a solution for it. I'm also a web guy, so I decided to write this implementation in JavaScript. 

When I was thinking about the problem, this was the first solution that I came up with:

```
function akParseFloat(str) {
    var decIndex = str.indexOf("."),
        num = str.substring(0, decIndex) + str.substring(decIndex+1), 
        place = decIndex - 1,
        res = 0,
        i = 0; 
        
    while (i < num.length) { 
        var val = num.charCodeAt(i) - 48;
        res += val * Math.pow(10, place);
        place++; 
        i--; 
    }
        
    return res;
}
```
