var converter = require('./converter.js');

var num = 10;

var bin = converter.bin(num);
console.log('BIN:' + bin);

var hex = converter.hex(num);
console.log('HEX: ' + hex);
