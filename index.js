// TODO:
// fade in opacity over X seconds after Y seconds inaction
// fade out again after key or mouse action
// on load, just choose one of the presets
// replace preset 1 with the null preset
// add some link out to source
// rsync -avz --exclude 'node_modules' --exclude '.*' ~/projects/fractal-tree-node/ rdb@richdecibels.com:~/websites/richdecibels.com/fractal-tree/


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
animate.init()

var activity = require('./js/activity')
activity.init();