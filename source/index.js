import uniqueRandomArray from 'unique-random-array';
import quotes from './quotes.json';

const getRandomQuote = uniqueRandomArray(quotes);

export default function randomQuotes(count=1) {
    if (count === 1) {
        return getRandomQuote();
    }

    const quotesArray = [];
    for (let i = 0; i < count; i++) {
        quotesArray.push(getRandomQuote());
    }
    return quotesArray;
}
