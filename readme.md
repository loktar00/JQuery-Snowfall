  Snowfall jquery plugin

====================================================================
LICENSE
====================================================================
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
====================================================================

##Version 1.6 Dec 8th 2012##

Added the ability to use images as snow flakes instead of just solid colored elements.

$(element).snowfall({image :"images/flake.png", minSize: 10, maxSize:32});

Pure version

snowFall.snow(elementCollection, {image : "images/flake.png", minSize: 10, maxSize:32});

elementCollection can be any valid element such as document.body

##Version 1.5##

Added collecting snow! Uses the canvas element to collect snow. In order to initialize snow collection use the following

$(document).snowfall({collection : 'element'});

element = any valid jquery selector.

The plugin then creates a canvas above every element that matches the selector, and collects the snow. If there are a varrying amount of elements the 
flakes get assigned a random one on start they will collide.

Version 1.4 Dec 8th 2010
Fixed issues (I hope) with scroll bars flickering due to snow going over the edge of the screen. 
Added round snowflakes via css, will not work for any version of IE. - Thanks to Luke Barker of http://www.infinite-eye.com/
Added shadows as an option via css again will not work with IE. The idea behind shadows, is to show flakes on lighter colored web sites - Thanks Yutt

Version 1.3.1 Nov 25th 2010
Updated script that caused flakes not to show at all if plugin was initialized with no options, also added the fixes that Han Bongers suggested 

Developed by Jason Brown for any bugs or questions email me at loktar69@hotmail
info on the plugin is located on Somethinghitme.com

values for snow options are

flakeCount,
flakeColor,
flakeIndex,
minSize,
maxSize,
minSpeed,
maxSpeed,
round, 		true or false, makes the snowflakes rounded if the browser supports it.
shadow		true or false, gives the snowflakes a shadow if the browser supports it.

Example Usage :
$(document).snowfall({flakeCount : 100, maxSpeed : 10});

-or-

$('#element').snowfall({flakeCount : 800, maxSpeed : 5, maxSize : 5});

-or with defaults-

$(document).snowfall();

- To clear -
$('#element').snowfall('clear');

