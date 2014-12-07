Snowfall jquery plugin
======================

[Live Demo](http://loktar00.github.io/JQuery-Snowfall/)
---

Install using `bower install jquery-snowfall`

Version 1.7.4
---

Bug fixes, removed `requestAnimationFrame` polyfill.

Updated to use [gulpjs](http://gulpjs.com/) for build process.


Version 1.6 Dec 8th 2012
-------------------------

Added the ability to use images as snow flakes instead of just solid colored elements.

```
$(element).snowfall({image :"images/flake.png", minSize: 10, maxSize:32});
```

Pure version

```
snowFall.snow(elementCollection, {image : "images/flake.png", minSize: 10, maxSize:32});
```

elementCollection can be any valid element such as document.body

Version 1.5
-------------------------

Added collecting snow! Uses the canvas element to collect snow. In order to initialize snow collection use the following

$(document).snowfall({collection : 'element'});

element = any valid jquery selector.

The plugin then creates a canvas above every element that matches the selector, and collects the snow. If there are a varrying amount of elements the 
flakes get assigned a random one on start they will collide.

Version 1.4 Dec 8th 2010
-------------------------

Fixed issues (I hope) with scroll bars flickering due to snow going over the edge of the screen. 
Added round snowflakes via css, will not work for any version of IE. - Thanks to Luke Barker of http://www.infinite-eye.com/
Added shadows as an option via css again will not work with IE. The idea behind shadows, is to show flakes on lighter colored web sites - Thanks Yutt

Version 1.3.1 Nov 25th 2010
-------------------------
Updated script that caused flakes not to show at all if plugin was initialized with no options, also added the fixes that Han Bongers suggested 

Developed by Jason Brown for any bugs or questions email me at loktar69@hotmail
info on the plugin is located on Somethinghitme.com

values for snow options are

```JavaScript
flakeCount,
flakeColor,
flakeIndex,
minSize,
maxSize,
minSpeed,
maxSpeed,
round, 		true or false, makes the snowflakes rounded if the browser supports it.
shadow		true or false, gives the snowflakes a shadow if the browser supports it.
```

Example Usage :

```JavaScript
$(document).snowfall({flakeCount : 100, maxSpeed : 10});
```

-or-

```JavaScript
$('#element').snowfall({flakeCount : 800, maxSpeed : 5, maxSize : 5});
```

-or with defaults-

```JavaScript
$(document).snowfall();
```

- To clear -

```JavaScript
$('#element').snowfall('clear');
```
