var parser = require('../parser');

describe('the @charset rule', function(){
    
    it('should catch charsets with single or double quotes', function(){
        expect(parser.parse('@charset "utf-8";').charset).toBe('utf-8');
        expect(parser.parse("@charset 'iso-8859-15';\n").charset).toBe('iso-8859-15');
    });
    
    it('should not add a charset attribute if there is no match', function(){
        expect(parser.parse('ladeeda').hasOwnProperty('charset')).toBe(false);
    });
    
});