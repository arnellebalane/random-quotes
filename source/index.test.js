const assert = require('assert');
const randomQuotes = require('./index');

describe('randomQuotes()', function() {
    it('should return a quote', function() {
        const quote = randomQuotes();
        assert(quote.body);
        assert(quote.author);
    });
});
