# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

The initial layout was straightforward with several uses of flexbox to organize the content into their desried positions. I didn't run into much trouble with the layout. One thing I would do differently if starting the project over would be the placement of #pop-up in the markup. With absolute positioning I set it to be relative to the share button itself, which made it easy to position but ran me into a couple of problems later. 1.) The event listener placed on the share button also runs when the user clicks on the pop-up, 2.) positioning the box in the mobile version was less smooth. Ideally I would position the pop-up relative to the main container. As this was a Javascript-focused project I elected to leave it as is for the time being.

### Built with

- Semantic HTML5 markup
- Flexbox

### What I learned

A key technique I learned was how to set an event listener onto the document itself, to allow for the pop-up box to be removed when the user clicks anywhere outside of the pop-up box itself.

```js
document.addEventListener('click', (event) => {
    let targetElement = event.target;
    console.log(targetElement)
    if (targetElement !== shareButton && targetElement !== arrowImage) {
        popUp.classList.add('hidden')
    }
})
```

### Continued development

This was a part of a Javascript learning pathway so I focused mostly on the Javascript aspects. Some of the styling details aren't perfect. I may return to them at a later date should I decide to feature this project.


## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**
