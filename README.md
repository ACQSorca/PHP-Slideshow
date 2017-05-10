# Slideshow
This is a simple web slideshow that utilizes CSS transitions activated through JavaScript calls changing the left properties of div elements.

## Installation
First link to the slideshow-styles.css file in the head of whatever page you want the slideshow on.
`<link rel="stylesheet" tyle="type/css" href="slideshow-assets/slideshow-styles.css" />`

At the end of the HTML file, link to the slideshow-script.js file
`<script src="slideshow-assets/slideshow-script.js"></script>`

### Static Version
For the static site, remove the includes directory and the dynamic.php file. Create a div with the id of "slideshow". Inside of that div, create another div with the id of "carousel" and a style of "left: 0;". This div will hold the slides.

~~~~
<div id="slideshow">
    <div id="carousel" style="left: 0;">
        SLIDES GO HERE
    </div>
</div>
~~~~

Each slide will be a div with elements that should look like this.

~~~~
<div class="slide">
    <img src="URL_IMG" />
    <div class="slide-info">
        <h2 class="slide-title">TITLE</h2>
        <span class="slide-description">DESCRIPTION</span>
    </div>
</div>
~~~~

These div slides will go inside of the carousel. Use the index.html page as reference.

### PHP Version
Include the style.php file, which includes the slide class definitions.
`<?php include('slideshow-includes/slide.php'); ?>`

Create each slide using the following constructor function.
`new slide('URL', 'IMG_URL', 'TITLE', 'DESCRIPTION');`

Finally, include the slideshow.php file, which will take the slide objects and create the HTML code for each slide.
`include('slideshow-includes/slideshow.php');`

Use the dynamic.php page as reference.

## Authors
Addison C. Quijano Sorca

## Licenses
MIT License
