# Day_Planner



## Description

Given a ```.gif``` file of a day planner and a beginning HTML and CSS file, the goal is to create a day planner that resembles the one in the ```.gif``` file. It should have the current day displayed at the top of the calendar with timeblocks for standard business hours. The timeblocks should be color-coded to represent past, present, and future. A user should be able to enter events into the timeblocks and save to local storage so they are still there after page refresh. 

- [Git Hub Repository](https://github.com/areitan/Day_Planner)
- [Day Planner Deployed Application](https://areitan.github.io/Day_Planner/)

Example Day Planner

![Day Planner Example](/assets/images/05-third-party-apis-homework-demo.gif)

Day Planner

![Day Planner Screenshot](/assets/images/Day_Planner.png)


## Process


### index.html

1. Originally, I added a table to the ```.htlm``` file for my timeblocks, but then decided to swith to ```<div>```'s to create the time blocks.
2. I added the provided css selectors to the ```.html``` file.
3. I added id's to the butons and places where I wanted the user to be able to add text.
4. Added id's to all the elements of the ```.html``` file that I wanted to interact with in the ```.js``` file.
5. I originally had all of the text boxes as input fields, but then I realized they should be ```<textarea>``` elements

### script.js

1. I added a variable for the current date to display on the planner and formatted it with ```moment.js```.
2. I added a variable for the current hour converted to military time with ```moment.js``` so I could use that in if statements to control the time-block colors in the ```.html``` file.
3. I added if statements for each hour to control the color.
4. I added functions to save user input from the text inputs to local storage.
5. I added event listeners to each time-block button to trigger saving the user input to local storage.
6. I added an ```init()``` function to append the values in local storage for all of the time blocks.


### style.css
1. I added in the css classes that were provided in the ```style.css``` file, but were missing from the ```.html``` file.
2. I changed the css selector and added text color to the icon for the save button hover effect so that it would work the way it does in the example ```.gif```. 
3. I also added variables for common colors and I changed the text color of the past, present, and future classes to black to match the example.


## How To Contribute

Suggestions are always welcome. I'm sure this is not the most elegant way to write this code, and there could be improvement.


## License

Copyright (c) ```<2022> <copyright April Reitan>```

MIT License:
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Credits

- [Stack Overflow: moment.js 24h format](https://stackoverflow.com/questions/12970284/moment-js-24h-format)
- [Moment.js Documentation: Display](https://momentjs.com/docs/#/displaying/)
- [Tutorial Republic: How to Get the Value in an Input Text Box using jQuery](https://www.tutorialrepublic.com/faq/how-to-get-the-value-in-an-input-text-box-using-jquery.php)
- [W3 Schools: JavaScript HTML DOM EventListener](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)
- [W3 Schools: HTML ```<textarea>``` Tag](https://www.w3schools.com/tags/tag_textarea.asp)
- [W3 Schools: Storage getItem() Method](https://www.w3schools.com/jsref/met_storage_getitem.asp)
- [MDN Web Docs: Storage.getItem()](https://developer.mozilla.org/en-US/docs/Web/API/Storage/getItem)
- Trilogy Education Services, LLC for the example gif and sample code throughout the week 5 activities.
