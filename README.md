# HW_Giphy-API
In this assignment, I used the GIPHY API to make a dynamic web page that populates with gifs. The web page also calls the GIPHY API and uses JavaScript and jQuery to change the HTML of the site.

## Live Link (GitHub Pages)
- https://mz1387.github.io/HW_Giphy-API/


## Requirements

1. Create an array of strings, each one related to a topic that interests you.
2. Your app should take the topics in this array and create buttons in your HTML.
3. When the user clicks on a button, the page should grab static, non-animated gif images from the GIPHY API and place them on the page.
4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
5. Under every gif, display its rating (PG, G, so on).
6. Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.

## Concepts Implemented

- Dynamically updated HTML powered by Javascript and jQuery
- Manipulated HTML elements based on user input
- Interact with an API and populate elements with data from that API response
- Toggle between an element's different states

## Code Explanation

- A user can either choose to add a new topic to the gifs list or choose a topic from the provided list
- After choosing a topic from the list the category will then populate the page with that topic's data that's been sent back from the API call
- The user can then select from the available gifs to toggle its state between still to animated
- The user can then select another topic to be displayed on the page
