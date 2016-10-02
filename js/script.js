var quotes = [
  {quote: "To err is human but to really foul things up requires a computer.", source: "Anonymous", citation: "Farmers Almanac", year: "1978", tags: "Technology"},
  {quote: "I've been things and seen places.", source: "Mae West", citation: "I'm No Angel", year: "1933", tags: "Virtue"},
  {quote: "Marriage isn't a word...it's a sentence!", source: "King Vidor", citation: "The Crowd", year: "1928", tags: "Marriage"},
  //{quote: "", source: "", citation: "", year: "", tags: ""},

];

function getRandomQuote (quotes) {
  var ind = Math.floor(Math.random() * 3);
  var chosenQuote = quotes[ind];
  return chosenQuote;
}

function printQuote() {
  var quoteObj = getRandomQuote();
}








// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
