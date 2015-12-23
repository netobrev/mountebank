'use strict';

var fs = require('fs'),
    http = require('http');

(function main(args) {
  var definition = JSON.parse(fs.readFileSync(args[0], 'utf8'));

  definition.resources.forEach(function(resource) {
    console.log(resource);
  });
})(process.argv.slice(2))
