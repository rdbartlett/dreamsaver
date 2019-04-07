var Mousetrap = require('mousetrap')
var stateMgmt = require('./stateMgmt')
var state = stateMgmt.get()
var rangesMgmt = require('./rangesMgmt')
var ranges
var attrs = rangesMgmt.attrs
var drawCanvas = require('./drawCanvas')
var animate = require('./animate')
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

Mousetrap.bind('a',  function() { if(state.modeIndex > 0) stateMgmt.set('modeIndex', state.modeIndex-1) })
Mousetrap.bind('z',  function() { if(state.modeIndex < 7) stateMgmt.set('modeIndex', state.modeIndex+1) })

Mousetrap.bind('j',  incState)
Mousetrap.bind('n',  decState)
Mousetrap.bind('k',  incSwing)
Mousetrap.bind('m',  decSwing)
Mousetrap.bind('l',  incFreq)
Mousetrap.bind(',',  decFreq)

function incState(){
  if (stateMgmt.mode() == 'urgncy') {
    stateMgmt.inc('urgncy', 1)
    animate.resetSweep()
  } else if (stateMgmt.mode() == 'huuuue'){
    stateMgmt.inc('red', 5)
  } else {
    rangesMgmt.inc(stateMgmt.mode(), 'center', 1)
    drawCanvas.updateStateWithRanges()
    drawCanvas.fromState()
  }
}

function decState(){
  if (stateMgmt.mode() == 'urgncy') {
    stateMgmt.dec('urgncy', 1)
    animate.resetSweep()
  } else if (stateMgmt.mode() == 'huuuue'){
    stateMgmt.dec('red', 5)
  } else {
    rangesMgmt.dec(stateMgmt.mode(), 'center', 1)
    drawCanvas.updateStateWithRanges()
    drawCanvas.fromState()
  }
}

function incSwing(){
  if (stateMgmt.mode() == 'urgncy') return
  else if (stateMgmt.mode() == 'huuuue') {
    stateMgmt.inc('green', 5)
  } else {
    rangesMgmt.inc(stateMgmt.mode(), 'amplitude', 1)
    drawCanvas.updateStateWithRanges()
    drawCanvas.fromState()
  }
}

function decSwing(){
  if (stateMgmt.mode() == 'urgncy') return
  else if (stateMgmt.mode() == 'huuuue') {
    stateMgmt.dec('green', 5)
  } else {
    rangesMgmt.dec(stateMgmt.mode(), 'amplitude', 1)
    drawCanvas.updateStateWithRanges()
    drawCanvas.fromState()
  }
}

function incFreq(){
  if (stateMgmt.mode() == 'huuuue') {
    stateMgmt.inc('blue', 5)
  } else if (stateMgmt.mode() != 'urgncy') rangesMgmt.inc(stateMgmt.mode(), 'freq', 1)
}

function decFreq(){
  if (stateMgmt.mode() == 'huuuue') {
    stateMgmt.dec('blue', 5)
  } else if (stateMgmt.mode() != 'urgncy') rangesMgmt.dec(stateMgmt.mode(), 'freq', 1)
}

Mousetrap.bind('o', function() { toggle('orbitt') });
Mousetrap.bind('p', function() { toggle('points') });


Mousetrap.bind('space', animate.playOrPause);


function toggle(attr){
  state = stateMgmt.get()
  if(state[attr]) stateMgmt.set(attr, false)
  else stateMgmt.set(attr, true)
  drawCanvas.fromState()
}
