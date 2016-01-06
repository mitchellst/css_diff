var parser = require('./parser');
module.exports = {};

function oneWayCompare(first, second){
    /**Takes two CSS objects (parsed files) and returns a "uniqueness object" for
     * the first css object. The uniquness object is an ordinary JS object that lists,
     * in an orderly way, all of the rules contained in object 1 that were not in object 2.
     * 
     * The comparator will run this function twice, switching the positions of the arguments.
     */
}

module.exports.compare = function(string1, string2){
    var obj1 = parser.parse(string1), obj2 = parser.parse(string2);
    return {unique1: oneWayCompare(obj1, obj2), unique2: oneWayCompare(obj2, obj1)};
    
    
};