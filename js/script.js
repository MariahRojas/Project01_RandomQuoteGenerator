/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// This is an array of objects. The boolean values ran my code properly in case one quote didnt have a citation or a year. 


var quotes = [
  { 
     quote:  'It\’s in the arch of my back, The sun of my smile, The ride of my breasts, The grace of my style. I\’m a woman Phenomenally. Phenomenal woman, That\’s me.',
     source: 'Maya Angelou',
     citation: 'Cosmopolitan Magazine', 
     year: 1978,
     tags: 'Poem',
     hasCitation: true,
     hasYear: true	
  },
  {
     quote: 'Power\’s not given to you. You have to take it.',
     source: 'Beyoncé',
     tags: 'interview',
     hasCitation: false,
     hasYear: false
  },
  {
     quote: 'When you play me, you play yourself. Don\’t play yourself.',
     source: 'Beyoncé',
     citation: 'Dont Hurt Yourself',
     year: 2016,
     tags: 'Music',
     hasCitation: true,
     hasYear: true
  },
  {
     quote: 'Dont ever underestimate the impact you can have because history has shown us that courage can be contagious and hope can take on a life of its own.',
     source: 'Michelle Obama',
     citation: 'Young African Women Leaders Forum',
     year: 2011,
     tags: 'Politics',
    hasCitation: true,
    hasYear: true
  },
  {
     quote: 'It may be normal, darling; but I\’d rather be natural.',
     source: 'Holly Golightly',
     citation: 'Breakfast at Tiffany\'s',
     year: 1961,
     tags: 'Movie',
     hasCitation: true, 
     hasYear: true
  }

];

// I logged in the array to the console by calling `quotes` function. 

console.log(quotes);


// The getRandomQuote function will run and create a random number between 1 and the length of the quote function to return a random quote. 

function getRandomQuote (){
  var randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
};

console.log( getRandomQuote() );


// The printQuote function will sync my random quotes to index.html so that my random quote will have the same format of the default quote in index.html. 

function printQuote ()
{
  var callQuote = getRandomQuote();
  var htmlQuote = '';
    htmlQuote = htmlQuote + '<p class="quote">' + callQuote.quote + '</p>';
    htmlQuote = htmlQuote + '<p class="source">' + callQuote.source;
    //
      
    if (callQuote.hasCitation)
    {
      htmlQuote = htmlQuote + '<span class="citation">' + callQuote.citation + '</span>';
    }
    
    if (callQuote.hasYear)
    {
     htmlQuote = htmlQuote + '<span class="year">' + callQuote.year + '</span>';    
    }
    if (callQuote.tags)
    {
      htmlQuote = htmlQuote + '<span class="tags">' + callQuote.tags + '</span>';
    }

    htmlQuote = htmlQuote + '</p>';

    document.getElementById("quote-box").innerHTML = htmlQuote;
    
  }

printQuote();

// The random_bg_color function will provide a random background color. 

function random_bg_color() {
  var x = Math.floor(Math.random() * 200);
  var y = Math.floor(Math.random() * 200);
  var z = Math.floor(Math.random() * 200);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);
 
  document.body.style.background = bgColor;
  }

// I called my random_bg_color() within printQuote() so that the quote and the background change at the same time. 

  setInterval("printQuote(random_bg_color())", 20000);

//  The two lines of code for the button upon click will sync, simultaneously changing the color and the quote.


document.getElementById('loadQuote').addEventListener("click", printQuote, false);

document.getElementById('loadQuote').addEventListener("click", random_bg_color, false);
