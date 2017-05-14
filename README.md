# Wall-E

Walle-E is a slack bot built with Node.js and Botkit. Its main feature is that it can describe pictures using the Google Vision API and a Natural Language Processing library called POS (for Part of Speech). 


## Demo
[see demo](https://cl.ly/3A3U0Q003O3s)


![Screen shot](/slack_screenshot.png?raw=true "Screen shot")

## What I Learned
**Asynchronous Callback Functions Can Be Confusing**
The POS library uses asynchronous functions, so they don't return the result of the function call. Instead, the return the result in a callback function. I had some problems with this when I wanted to modularize the function to return the adjectives from an array of labels from the Google Vision API. After trying for hours I realized that I should just have WALL-E spit out the message that included the adjective within POS's getAdjective function instead of trying to separate those two things.

## Improvements/Additional Features
My initial vision for this project was to make a slackbot that gave a synopsis of what happened on slack on a particular day including who had posted the most popular image and what it was a picture of. I ended up only having time to implement the base feature in which WALL-E describes a picture given a URL.

In the future, I'll need to access the Slack API to get a list of all the pictures posted on a particular day, pick the one with the most reactions/comments, and describe that picture.

Another improvement I want to make is to improve WALL-E's descriptions for animals. Currently WALL-E thinks that the word "vertebrae" is an adjective so when given a picture of a dog he will say "This is a picture of a vertebrate dog." A crude solution would be something like `if word == "vertebrate" use the next adjective`. This wouldn't solve the problem for other undesirable adjectives, however. Perhaps a better solution would be to use a special database of appropriate adjectives rather than relying on the POS library or use a different library.
