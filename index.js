// TODO:
// strip out keybindings? or replace with Esc
// don't show on mobile
// set up some presets, or semi-random settings
// create demo.html with timeout triggered by X seconds of inaction
// fade in opacity over Y secondss
// add some link out to source


var stateMgmt = require('./js/stateMgmt')
stateMgmt.init();

var rangesMgmt = require('./js/rangesMgmt')
rangesMgmt.init();

var drawCanvas = require('./js/drawCanvas')
drawCanvas.setRoot();
drawCanvas.fromState();
window.addEventListener('resize', function() {
  drawCanvas.setRoot()
  drawCanvas.fromState();
});

var presets = require('./js/presets')
var keys = require('./js/keys')
var animate = require('./js/animate')

animate.sweep();

var params = require('./js/params')
params.drawCanvasFromURL()