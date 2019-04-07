var Mousetrap = require('mousetrap')
var presets = require('./presets')

Mousetrap.bind('1', function() { presets.load(0) });
Mousetrap.bind('2', function() { presets.load(1) });
Mousetrap.bind('3', function() { presets.load(2) });
Mousetrap.bind('4', function() { presets.load(3) });
Mousetrap.bind('5', function() { presets.load(4) });
Mousetrap.bind('6', function() { presets.load(5) });
Mousetrap.bind('7', function() { presets.load(6) });
Mousetrap.bind('8', function() { presets.load(7) });
Mousetrap.bind('9', function() { presets.load(8) });
Mousetrap.bind('0', function() { presets.load(9) });