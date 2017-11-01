import assert from 'assert';
import randomQuotes, { byAuthor } from './index';

describe('randomQuotes()', function() {
    it('should return a quote by default', function() {
        const quote = randomQuotes();
        assert(quote.body);
        assert(quote.author);
    });

    it('should return an array of quotes when passed an integer', function() {
        const quotes = randomQuotes(3);
        assert.equal(quotes.length, 3);

        quotes.forEach(quote => {
            assert(quote.body);
            assert(quote.author);
        });
    });
});

describe('randomQuotes.byAuthor(author)', function() {
    it('should return array of string quote bodies by given author', function() {
        const quotes = byAuthor('Unknown');
        assert.equal(quotes.constructor, Array);

        quotes.forEach(quote => {
            assert.equal(typeof quote, 'string');
        });
    });
});
