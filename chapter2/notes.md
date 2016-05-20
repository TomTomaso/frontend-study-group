# Chapter 2: No framework, no panic

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

## Frameworks

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

jQuery:
```javascript
$(‘#myButton”).click(function() { 
   alert(“Hello”); 
}); 
```
JavaScript:
```javascript
document.getElementById(“myButton”)
   .addEventListener(‘click’, function() { 
      alert(“Hello”); 
   });
```

**Change the background color of a div**

jQuery:
```javascript
$('.greenDiv').css('background', 'green');
```
JavaScript:
```javascript
function changeBackground (color) {
        document.body.style.background = color;
}
<div class=“greenDiv” onload=”changeBackground (‘green’);”>
```

### Underscore / Lodash

### Backbone / Ember / Angular / React


