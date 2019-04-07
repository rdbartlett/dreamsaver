var stateMgmt = require('./stateMgmt')

function init(){
  // triggers the screensaver after X milliseconds of inactivity

  var delay = 1000
  var time

  window.onload = resetTimer
  document.onmousemove = resetTimer
  document.onkeypress = resetTimer

  function show() {
    console.log("now showing the dreamsaver")
    stateMgmt.set('showCanvas', true);
  }

  function hide() {
    console.log("now hiding the dreamsaver")
    stateMgmt.set('showCanvas', false);
  }

  function resetTimer() {
    hide()
    clearTimeout(time)
    time = setTimeout(show, delay)
  }
}

module.exports = { init }