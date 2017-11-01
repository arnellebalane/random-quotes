import assert from 'assert';
import randomQuotes from './index';

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
