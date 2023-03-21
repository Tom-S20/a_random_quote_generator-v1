/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/
const quotes = [
  {quote:'“Life moves pretty fast. If you don’t stop and look around once in a while, you could miss it.”',
  source: 'Ferris Bueller',
  citation: "Ferris Bueller's Day Off",
  tags: "motivation" },
  {quote: "I'm gonna make him an offer he can't refuse",
  source: 'The Godfather',
  year:  1972 },
  {quote: 'Do or do not. There is no try',
  source: 'Yoda',
  tags: "motivation" },
  {quote: "Just because someone stumbles and loses their path, doesn't mean they're lost forever.",
  source: 'Professor X' },
  {quote: "Life is not the amount of breaths you take. It’s the moments that take your breath away.",
  source: 'Hitch',
  tags: "motivation" }
];

//console.log(quotes)


/***
 * `getRandomQuote` function
***/
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array

function getRandomQuote() {
  function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);

    document.body.style.background = bgColor;
    }

random_bg_color();  // resource: https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php

  const randomNumber = Math.floor(Math.random() * quotes.length) ;
  return quotes[randomNumber];
};
  // 2. Use the random number variable and bracket notation
  // to grab a random object from the `quotes` array, and
  // store it in a variable

  // 3. Return the variable storing the random quote object


//console.log(getRandomQuote())


/***
 * `printQuote` function
***/
function printQuote() {
  let randomQuoteObj = getRandomQuote();
  let html = `
  <p class="quote"> ${randomQuoteObj.quote} </p>
  <p class="source">${randomQuoteObj.source} `;

  if (randomQuoteObj.citation != null) {
    html += `<span class="citation"> ${randomQuoteObj.citation}</span>`
  }
  if (randomQuoteObj.year != null) {
    html += `<span class="year"> ${randomQuoteObj.year}</span>`
  }
  if (randomQuoteObj.tags != null) {
    html += `<span class="tags"> #${randomQuoteObj.tags}</span>`
  }
  html += `</p>`
  document.getElementById('quote-box').innerHTML = html;

};

setInterval(printQuote, 10000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
