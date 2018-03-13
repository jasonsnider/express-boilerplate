var fs = require('fs');
var cssVersion = fs.readFileSync('config/version.css.txt', 'utf8');
var jsVersion = fs.readFileSync('config/version.js.txt', 'utf8');

var config = {};

config.versions = {
    css: cssVersion,
    js: jsVersion
}

module.exports = config;