var stateMgmt = require('./stateMgmt')
var drawCanvas = require('./drawCanvas')
var animate = require('./animate')

function init(){
  // triggers the screensaver after X milliseconds of inactivity

  var delay = 1000
  var time

  window.onload = resetTimer
  document.onmousemove = resetTimer
  document.onkeypress = resetTimer

  function showScreensaver() {
    console.log("inactivity detected: now showing the dreamsaver")
    stateMgmt.set('animate', true);
    animate.sweep();

    stateMgmt.set('showCanvas', true);
    drawCanvas.fromState();

  }

  function hideScreensaver() {
    console.log("activity detected: now hiding the dreamsaver")

    stateMgmt.set('animate', false);
    animate.resetSweep();

    stateMgmt.set('showCanvas', false);
    drawCanvas.fromState();
  }

  function resetTimer() {
    hideScreensaver()
    clearTimeout(time)
    time = setTimeout(showScreensaver, delay)
  }
}

module.exports = { init }