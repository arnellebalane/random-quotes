const uniqueRandomArray = require('unique-random-array');
const quotes = require('./quotes.json');

const getRandomQuote = uniqueRandomArray(quotes);

function randomQuotes() {
    return getRandomQuote();
}

module.exports = randomQuotes;
