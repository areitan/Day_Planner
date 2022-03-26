# Day_Planner



## Description

Given a ```.gif``` file of a day planner and a beginning HTML and CSS file, the goal is to create a day planner that resembles the one in the ```.gif``` file. It should have the current day displayed at the top of the calendar with timeblocks for standard business hours. The timeblocks should be color-coded to represent past, present, and future. A user should be able to enter events into the timeblocks and save to local storage so they are still there after page refresh. 

- [Git Hub Repository](https://github.com/areitan/Day_Planner)
- [Day Planner Deployed Application](https://areitan.github.io/Code_Quiz/)

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

### script.js

1. I added a variable for the current date to display on the planner.
2. I added a variable for the current hour converted to military time so I could use that in if statements to comtrol the colors in the ```.html``` file.
3. I added if statements for each hour to control the color.


### style.css
1. I changed the css selector and added text color to the icon for the save button hover effect so that it would work the way it does in the example ```.gif```. 
2. I  also added variables for common colors and I changed the text color of the past, present, and future classes to black to match the example.


## How To Contribute



## Credits
- [Stack Overflow: moment.js 24h format](https://stackoverflow.com/questions/12970284/moment-js-24h-format)
- [Moment.js Documentation: Display](https://momentjs.com/docs/#/displaying/)
- Trilogy Education Services, LLC for the example gif and sample code throughout the week 5 activities.