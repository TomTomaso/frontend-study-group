# Chapter 2: No framework, no panic

## A bit of history: evolution of JavaScript scene

### Vanilla JavaScript

In the beginning, there was just JavaScript and almost everyone was afraid to use it because of the inconsistent DOM APIs across different browsers which resulted in lots of bugs.

### jQuery

jQuery came along and it was a great step forward, making DOM manipulation and AJAX calls less risky by abstracting away the differences into one consistent API. 

As developers began to write more and more JavaScript and jQuery to make their applications more innovative their code quickly became messier and difficult to manage.

### 1st generation of MV* frameworks: Backbone, Knockout...

Backbone arrived and provided organization to that messy jQuery code and allowed a new generation of applications to be built in the browser by adding a thin layer on top of the familiar jQuery code developers were already writing.  

Developers still found it difficult to be productive and longed for features such as data binding, for which then Knockout came along providing it but didn’t actually have any other features that developers needed to build single page applications (SPA).

These lack of features was partially solved by the appearance of libraries such as Underscore or Lodash.

### 2nd generation of MV* frameworks: Angular, Ember...

At this point a second generation of more robust frameworks began to come out.  Angular emerged with all the needed framework pieces in one box: data binding, routing, templating, persistence as well as a compelling testing story and a more declarative syntax. 

### 3rd generation of MV* frameworks: React, Angular2

Though the 2nd generation was adopted by many developers in their projects and are still really popular nowadays, they presented some quite notorious performance problems and some other like having a quite steep learning curve which are the areas that the current modern generation of MV* frameworks try to tackle allowing the creation of applications following the new paradigm the web development scene is moving to, the web components.

## Frameworks vs JavaScript

### Why to use a framework?

* Cross-browser compatibility
* Code simplification (e.g.: AJAX calls, DOM manipulation...)
* Access to future features of JavaScript not yet supported by all browsers

### Why you should still learn JavaScript first?

* Every framework uses JavaScript under the hood --> Good to have an idea of what you're actually doing ;)
* Better for small libraries/components:
  * Portable (easier to adapt to any other application)
  * Saves bandwidth

## Libraries

### jQuery ([API](http://api.jquery.com/))

* Adds a $ object to the global scope with a bunch of methonds in it

#### Code examples:

**Select a DOM element**

jQuery:
```javascript
$('#myElement'); 
```
JavaScript:
```javascript
document.getElementById(“myElement”);
```

**Show an alert after clicking a button**

JavaScript:
```javascript
document.getElementById(“myButton”)
   .addEventListener(‘click’, function() { 
      alert(“Hello”); 
   });
```
jQuery:
```javascript
$(‘#myButton”).click(function() { 
   alert(“Hello”); 
}); 
```

**Change the background color of a div**

JavaScript:
```javascript
function changeBackground (color) {
        document.body.style.background = color;
}
<div class=“greenDiv” onload=”changeBackground (‘green’);”>
```
jQuery:
```javascript
$('.greenDiv').css('background', 'green');
```

### Underscore ([API](http://underscorejs.org/))

Underscore.js is a JavaScript library which provides utility functions for common programming tasks.

Nowadays though, with the appearance of ES5 and ES6 most of their utilities can be replaced by plain JavaScript.

**Filter even numbers of an array**

JavaScript < ES5:
```javascript
var evenNumbers = [];
var testArray = [1, 2, 3, 4, 5, 6];
for (var i = 0, length = testArray.length; i < length; i++) {
 if (testArray[i] % 2 === 0) {
	 evenJS.push(testArray[i]);
	}
}
```
Underscore:
```javascript
_.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 === 0; });
```
JavaScript > ES5:
```javascript
[1, 2, 3, 4, 5, 6].filter(function(num){ return num % 2 === 0; });
```

## MV* frameworks

### AngularJS ([API](https://docs.angularjs.org/api))
