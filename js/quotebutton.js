// Creates a constant String variable of quotes
const quotes = [
  "Here's the deal Jack. I'm the best there is. Plain and simple. I wake up in the morning and I piss excellence. -- Ricky Bobby",
  "Let us never negotiate out of fear. But let us never fear to negotiate. -- JFK",
  "This is the day you will always remember as the day you almost caught Captain Jack Sparrow. -- Jack Sparrow",
  "Your time is limited, don't waste it living someone else's life. -- Steve Jobs",
  "If life were predictable it would cease to be life, and be without flavor. -- Eleanor Roosevelt",
  "Ask not what your country can do for you, ask what you can do for your country. -- JFK",
  "Life is what happens when you're busy making other plans. -- John Lennon",
  "Spread love everywhere you go. Let no one ever come to you without leaving happier. -- Mother Teresa",
  "When you reach the end of your rope, tie a knot in it and hang on. -- Franklin D. Roosevelt",
  "Without action, the best intentions in the world are nothing more than that: intentions. -- Jordan Belfort",
];

// Creates constant HTML element from the HTML element id
const quoteButton = document.getElementById("quote-button");

// Adds a click event listener to the button
quoteButton.addEventListener("click", function () {
  // Generate a random quote from the arra
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  // Display the random quote in an alert popup
  alert(quote);
});
