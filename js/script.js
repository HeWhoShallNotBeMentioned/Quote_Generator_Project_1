//placeholder for quotes displayed per cycle;
var displayedQuotes = [];

//data for the application stored as an array.
var colors = ["blue","red", "silver", "blueviolet", "darkgreen", "silver", "steeleblue", "sienna", "plum", "magenta", "lightseagreen"];

//sets a time interval of 5 seconds when the quote will automatically change.
var intervalId = window.setInterval(printQuote, 5000);

//quote data for the application stored as an array of objects.
function resetDisplayQuotes () {
var quotes = [
  {quote: "To err is human but to really foul things up requires a computer.", source: "Anonymous", citation: "Farmers Almanac", year: "1978", tags: "Technology"},
  {quote: "I've been things and seen places.", source: "Mae West", citation: "I'm No Angel", year: "1933", tags: "Virtue"},
  {quote: "Marriage isn't a word...it's a sentence!", source: "King Vidor", citation: "The Crowd", year: "1928", tags: "Marriage"},
  {quote: "Doh!", source: "Homer Simpson", citation: "", year: "", tags: "Surprise"},
  {quote: "I'm not lazy, I'm just on energy saving mode.", source: "Anonymous", citation: "", year: "", tags: "Lifestyle"},
  {quote: "Never, ever underestimate the importance of having fun.", source: "Randy Pausch", citation: "", year: "", tags: ""},
  {quote: "The great pleasure in life is doing what people say you cannot do.", source: "Walter Bagehot", citation: "", year: "", tags: "Lifestyle"},
  {quote: "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.", source: "Yoda", citation: "The Empire Strikes Back", year: "", tags: "Culture"},
  {quote: "No Luke. I am your father", source: "Darth Vader", citation: "The Empire Strikes Back", year: "", tags: "Family"},
  //{quote: "", source: "", citation: "", year: "", tags: ""},
];
return quotes;
}

//function randomly determines which quote object will be chosen from quotes and returns it.
function getRandomQuote () {
//if statement filles the displayed quotes array whenever it gets empty
  if (displayedQuotes.length === 0) {
    console.log("inside if statement");
    displayedQuotes = resetDisplayQuotes();
  }
//choses the index # for the random quote
  var ind = Math.floor(Math.random() * displayedQuotes.length);
//picks the quote using the ind generated the previous line.
  var chosenQuote = displayedQuotes[ind];
//take out the quote from the line above for the displayedQuotes array
  displayedQuotes.splice(ind, 1);
//returns the chosenQuote object to the printQuote function
  return chosenQuote;
}

//function randomly determines which color will be chosen from colors and returns it.
function getRandomColor(colors) {
//random number that will be used for the index of the color to be selected.
  var ind = Math.floor(Math.random() * colors.length);
//assigns the chosen color to the a variable.
  var chosenColor = colors[ind];
//returns the color to printQuote to be used as the background-color for that particular random quote.
  return chosenColor;
}

//requests quote from getRandomQuote. Processes that quote into the html that will be displayed.
//Uses conditionals to print out the optional properties only when they are present.
function printQuote(chosenQuote) {
  var quoteObj = getRandomQuote();
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
//calls the getRandomColor function, sends the colors array, and assigns the result to backColor.
  var backColor = getRandomColor(colors);
//changes the background-color to the color received from the getRandomColor function;
  document.body.style.backgroundColor = backColor;

}
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
