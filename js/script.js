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
  source: '-Ferris Bueller', citation: "Ferris Bueller's Day Off" },
  {quote:"I'm gonna make him an offer he can't refuse",
  source: '-The Godfather', year:  1972 },
  {quote:'Do or do not. There is no try',
  source: '-Yoda'  },
  {quote:"Just because someone stumbles and loses their path, doesn't mean they're lost forever.",
  source: '-Professor X' },
  {quote: "Life is not the amount of breaths you take. It’s the moments that take your breath away.",
  source: '-Hitch' }
];

console.log(quotes)


/***
 * `getRandomQuote` function
***/
let randomQ ;
function getRandomQuote() {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array
  const randomNumber = math.floor(math.random() * 5) +1;
  // 2. Use the random number variable and bracket notation
  // to grab a random object from the `quotes` array, and
  // store it in a variable
for ( let keys in quotes) {
      randomQ = randomNumber
}
  // 3. Return the variable storing the random quote object
}
  console.log()


/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
