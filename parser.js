/** This module will export a function that parses a css file and returns an orderly listing
 * of all css rules, for comparison. I fully anticipate adding reusable bits of functionality
 * in other functions as the regexes shape up.
 */
var cssrex = require('./cssrex');



function parse(css){
    /** Takes the string or stream of a css file, returns an object with an orderly listing
     * of all css rules.
     */
    if(typeof css != 'string'){ css = css.toString(); }

    var out = {};

    var charset = css.match(cssrex.charset);
    if (charset != null && (charset[1] || charset[2])){
        out.charset = charset[1] || charset[2];
    }
    
    
    return out;
}

module.exports = {parse: parse};
