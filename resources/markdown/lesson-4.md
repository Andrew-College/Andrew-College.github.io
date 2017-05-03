Righto, so we need to make changes to this website!

At the moment, the code is hosted on my [Github Account](http://github.com/Andrew-College) ([Here's the repository](https://github.com/Andrew-College/Andrew-College.github.io))

There are a number of technologies that go into making this site. Most are handy tools that helped make adding and changing stuff easier!

First off, the Development Environment.
Getting stuff done involves using [VS Code](https://code.visualstudio.com/). This is by no means the only Editor used for writing stuff, but It's certainly easy to get up and running.

Writing standard HTML, CSS, and Javascript is all well and good, but in this modern time, I've been using:

- [Emmett](https://emmet.io/)

  Emmet is a scripting language used to write loads of html code using a shortened pattern. *VSCode has this by default*

  The Emmet script:
  ```html
  !>div.topper>((span.middler1)+(#middler2>img[src="images/the_game.png"]))
  ```

  becomes:
  ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Document</title>
   </head>
   <body>
      <div class="topper">
         <span class="middler1"></span>
         <div id="middler2"><img src="images/the_game.png" alt=""></div>
      </div>
   </body>
   </html>
  ```

- [Sass](http://sass-lang.com/) 

  Sass is a CSS tool that (kinda like emmet) gives more out than you write in!

  Sass code looks something like:

  ```
  #content
    max-height: 600px
    overflow-y: auto
    background: url("../../images/page_pixels.png") top left repeat
    .gif
      width: 400px
    & p, & pre
      padding-left: 2em
  ```

  Will become the following Css:

  ```Css
  #content {
    max-height: 600px;
    overflow-y: auto;
    background: url("../../images/page_pixels.png") top left repeat; }
    #content .gif {
      width: 400px; }
    #content p, #content pre {
      padding-left: 2em; }
  ```

- [JQuery](https://jquery.com/) 

  JQuery is a powerful Javascript library that just makes Javascript so much cooler! JQuery makes complex stuff a doddle!

  For example, the JQuery

  ```javascript
  $('div.header').css('background', 'red');
  ```

  does exactly the same job as

  ```javascript
  /* 
  * Note - 
  *  This is untested. 
  *  I'm 99.9999% certain this works,
  *  but it is exacly what the Jquery is NOT doing...
  */
  var divs = document.getElementsByTagName("div");

  for (var i=0, max=divs.length; i < max; i++) {
    var elem = divs[0].getElementsByClassName("header");
    for (var elem_i=0, elem_max=elem.length; elem_i < elem_max; elem_i++) {
      elem[elem_i].style.background = "red";
    }
  }
  ```

- [Markdown](https://en.wikipedia.org/wiki/Markdown) 

  Writing out the html for the code blocks, links, images, etc. is tedious. Markdown is an up-and-coming standard for documentation that takes so little (all of these lessons are found in the [resources => markdown](https://github.com/Andrew-College/Andrew-College.github.io/tree/master/resources/markdown) section of my repository.)