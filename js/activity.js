var stateMgmt = require('./stateMgmt')
var drawCanvas = require('./drawCanvas')
var animate = require('./animate')
var myopacity

function init(){
  // triggers the screensaver after X milliseconds of inactivity

  var delay = 15000
  var time

  window.onload = resetTimer
  var events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
  events.forEach(function(name) {
    document.addEventListener(name, resetTimer, true);
  });

  function showScreensaver() {
    stateMgmt.set('animate', true);
    animate.sweep();

    stateMgmt.set('showCanvas', true);
    drawCanvas.fromState();

    myopacity = 0;
    MyFadeFunction();
  }


  function MyFadeFunction() {
     if (myopacity<1) {
        myopacity += .005;
       setTimeout(function(){MyFadeFunction()},100);
     }
     document.getElementById('dreamsaver').style.opacity = myopacity;
  }


  function hideScreensaver() {
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