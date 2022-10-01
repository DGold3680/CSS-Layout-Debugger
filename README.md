# CSS-Layout-Debugger

##A simpler way to work with CSS
The CSS-Layout-Debugger is a simple tool that makes dealing with CSS bugs easier by visualizing the box model of every element on screen.


##Features
1. Outline view
2. BackgroundColor view(transparent)
3. BackgroundColor view(multicolor)
4. Overflow view

##Outline view
A simple outline of 1px solid red surrounds each element.

##Backgroundcolor view(transparent)
-A semi transparent blue backgroundColor is added to each element
-Parent elements are more transparent
-Child elements are more opaque
-The more nested the child element the more opaque it is
-Best used with outline view

##BackgroundColor view(multicolor)
-Each level of element nesting is giving a different color
-The list of colors for each level of nesting is shown on the console
##Usage
Add package as a script tag at the bottom of your html document.
For  use in development only.

##Overflow view 
-A padding of 2em is added to the body so any overflow can be easily seen.
-Use with either outline or backgroundColor views
