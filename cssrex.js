/** Module containing regular expressions for parsing CSS. Used by the parser. */

var charset = /^@charset\s(?:'([\S]+?)'|"([\S]+?)");/,
fontface = /@font-face\s*\{([\s\S]*?)}/;

module.exports = {
    charset: charset,
    fontface: fontface
};

