let quotesUrl =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
const result = fetch(quotesUrl)
  .then((res) => res.json())
  .then((data) => {
    gotten = data;
    // console.log(gotten.quotes);
    return gotten.quotes;
  });

onLoad = async () => {
  await createQuote();
};

const createQuote = async () => {
  const quotes = await gotten.quotes;
  //   console.log(quotes);

  let quoteSize = quotes.length;
  let randomIndex = Math.floor(Math.random() * quoteSize);
  let randomQuoteData = quotes[randomIndex];

  let twitterLink =
    "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";

  document.getElementById("tweet-quote").href =
    twitterLink +
    encodeURIComponent(
      '"' + randomQuoteData.quote + '" ' + randomQuoteData.author
    );

  document.getElementById("text").innerText = randomQuoteData.quote;
  document.getElementById("author").innerText = randomQuoteData.author;
};

window.onload = onLoad;
