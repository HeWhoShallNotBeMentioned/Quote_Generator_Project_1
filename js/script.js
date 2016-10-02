//data for the application stored as an array of objects.
var quotes = [
  {quote: "To err is human but to really foul things up requires a computer.", source: "Anonymous", citation: "Farmers Almanac", year: "1978", tags: "Technology"},
  {quote: "I've been things and seen places.", source: "Mae West", citation: "I'm No Angel", year: "1933", tags: "Virtue"},
  {quote: "Marriage isn't a word...it's a sentence!", source: "King Vidor", citation: "The Crowd", year: "1928", tags: "Marriage"},
  {quote: "Doh!", source: "Homer Simpson", citation: "", year: "", tags: "Surprise"}
  //{quote: "", source: "", citation: "", year: "", tags: ""},
];

//data for the application stored as an array.
var colors = ["blue","red", "silver", "blueviolet", "darkgreen", "silver", "steeleblue", "sienna", "plum", "magenta", "lightseagreen"];

//function randomly determines which quote object will be chosen from quotes and returns it.
function getRandomQuote (quotes) {
  var ind = Math.floor(Math.random() * quotes.length);
  var chosenQuote = quotes[ind];
  return chosenQuote;
}

//function randomly determines which color will be chosen from colors and returns it.
function getRandomColor(colors) {
  var ind = Math.floor(Math.random() * colors.length);
  var chosenColor = colors[ind];
  return chosenColor;
}

//requests quote from getRandomQuote. Processes that quote into the html that will be displayed.
//Uses conditionals to print out the optional properties only when they are present.
function printQuote(chosenQuote) {
  var quoteObj = getRandomQuote(quotes);
  var htmlQuote = '<p class="quote">' + quoteObj.quote + '</p>';
  htmlQuote += '<p class="source">' + quoteObj.source;
  if (quoteObj.citation !== "") {
    htmlQuote += '<span class="citation">' + quoteObj.citation + '</span>';
  }
  if (quoteObj.year !== "") {
    htmlQuote += '<span class="year">' + quoteObj.year + '</span>';
  }
  if (quoteObj.tags !== "") {
    htmlQuote += '<span class="year">' + quoteObj.tags + '</span>';
  }
  htmlQuote += '</p>';

//prints the code on the page.
  document.getElementById('quote-box').innerHTML = htmlQuote;

  var backColor = getRandomColor(colors);
  document.body.style.backgroundColor = backColor;

}
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
