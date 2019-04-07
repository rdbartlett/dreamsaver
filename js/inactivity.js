function init(){
  // triggers the screensaver after X milliseconds of inactivity

  var delay = 500
  var time;

  window.onload = resetTimer;
  document.onmousemove = resetTimer;
  document.onkeypress = resetTimer;

  function logout() {
      console.log("You are now logged out.")
  }

  function resetTimer() {
      clearTimeout(time);
      time = setTimeout(logout, delay)
  }
}

module.exports = { init }