# Chapter 1

## Covered topics:
* Basic git usage, most used commons
* File structure and organization by type
* Package manager / dependency management (npm)
* Jquery & DOM manipulation
* Basic app 


## technics:
frontend libs:
- Jquery


## development tools:
- npm
- https://github.com/johnpapa/lite-server

# steps
1. git and github
   1. git init
   2. Link to own github profile
   3. commit after step/chapter
1. Folder structure
   1. readme file
   2. index.html
   3. src/-style
   4.       -scripts
1. NPM und Co
   1. - npm init
1. install first dependecy
   1. - install jquery
   2. git ignore
   3. - why jquery and not plain js (mention IE  support, smoother api, etc.)
   4. - compare jquery and plain js one by one with jquery 
      1. http://codepen.io/hal9087/pen/yOwYOP
      2. http://www.sitepoint.com/jquery-vs-raw-javascript-3-events-ajax/
1. serve our app
   1. - install liteserver[a]
   2. npm install  lite-server --save-dev
   3. - start server
   4. $ lite-server
   5. - see how app looks like
1. DOM manipulation        
   1. Input 
   2. Custom script
   3. Select a input by id
   4. Submit by click
1. Homework
   1. play with jquery 
   2. input type text
   3. if you enter text and press enter
   4. it should appear as a list entry below the input, using ul li
   5. prepare a example to show

Some jQuery based example for the first chapter

Homework: solve all 4 examples without help

## Task 1: Definition of Done 
* add an input to your page
* where you type text and on enter it will alert the text
* remove text after enter from input
	
## Task 2: DOD
- add another input to your page and a paragraph.
- where you type text and on every key up it will update the text to the paragraph

## Task 3: DOD
- add another input to your page and a unordered list <ul></ul>
- where you type text and on every enter it will add the input text as a new entry to the list (<li></li>) element
- clear the text in input afterwards

## Task4: DOD
- like task 3
- add additional a delete element, which can delete your list entry for example a ( <small> X </small> )

Add all the code to your repository and push it to your github profile. Fix your problems with your git on your computer, if it is still not working.
We will discuss your solution in next exercise, we will also look together at the code. So prepare it readable.

Please Read following topics from wikipedia or somewhere google:
- ajax
- http://www.sitepoint.com/jquery-vs-raw-javascript-3-events-ajax/
- http://www.w3schools.com/jquery/
- http://rogerdudler.github.io/git-guide/
