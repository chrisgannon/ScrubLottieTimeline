# ScrubLottieTimeline
Allows granular scrubbing through a Lottie (AKA Bodymovin) timeline with the mouse to help with accurate animation timing and positioning.

This script allows you to scrub through a Lottie animation timeline simply by moving your mouse left to right. 
It also displays your animation's current time. It's particularly useful if you create long timelines and need to quickly and accurately preview certain points in your animation.

To use it:

- Create a reference to your Lottie animation ```loadAnimation()``` call. E.g. ```let anim = lottie.loadAnimation(animData);```
- Add the line ScrubBodymovinTimeline(); and pass in the Bodymovin reference. So if your instance is called ```anim``` you would write:
 ```ScrubLottieTimeline(anim);```
- To let the timeline play automatically, move your mouse outside the document.
- Moving your mouse off the document at, say, halfway along the X axis, will play the timeline from that percentage of the timeline (i.e. halfway through the timeline's duration).
- Double click to pause scrubbing. 
- Double click again to unpause.

## Demo
CodePen demo [here](http://codepen.io/chrisgannon/pen/23752505b7a740dbc06f88a76d7b263f)
