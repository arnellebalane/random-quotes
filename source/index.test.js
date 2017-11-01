import assert from 'assert';
import randomQuotes from './index';

describe('randomQuotes()', function() {
    it('should return a quote', function() {
        const quote = randomQuotes();
        assert(quote.body);
        assert(quote.author);
    });
});
