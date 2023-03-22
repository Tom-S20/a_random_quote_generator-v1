/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 * `quotes` array of quotes with 'source', 'citation', 'year' and 'tags'
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




/***
 * `getRandomQuote` function
 * Creates random number to use as index number to pull from the array of 'quotes'.
 * Also will create a random background color.
***/


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



/***
 * `printQuote` function
 *  Structure organization for all the objects in the 'quotes' array.
 * prints to 'index.html'
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
// 10 second interval to change background color and quote

/***
 * click event listener for the print quote button
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
