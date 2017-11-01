import uniqueRandomArray from 'unique-random-array';
import quotes from './quotes.json';

const getRandomQuote = uniqueRandomArray(quotes);

export default function randomQuotes() {
    return getRandomQuote();
}
