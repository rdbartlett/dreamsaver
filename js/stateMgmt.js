var state = {}

function init(){
  state = {
    quirkk: 0, widthh: 180, energy: 30, repeat: 16, tensor: 13, yessss: 10,
    angle: 90, pointSize: 2, lineWidth: 1,
    points: false, orbitt: false, urgncy: 2,
    red: 255, green: 0, blue: 150,
    showCanvas: false, animate: false
  }
}

var bounds = {
  energy: {min: 0, max: 100},
  repeat: {min: 0, max: 300},
  tensor: {min: 0, max: 999},
  yessss: {min: 0, max: 16},
  urgncy: {min: 1, max: 100},
  red: {min: 0, max: 255},
  green: {min: 0, max: 255},
  blue: {min: 0, max: 255}
}

function get(){
  return state
}

function set(attr, to){
  state[attr] = to
}

function inc(attr, by){
  // only increment the attribute if it is not at maximum
  if(bounds[attr]){
    if((state[attr] + by) <= bounds[attr].max){
      state[attr] += by
    }
  }
  else{ state[attr] += by }
}

function dec(attr, by){
  // only decrement the attribute if it is not at maximum
  if(bounds[attr]){
    if((state[attr] - by) >= bounds[attr].min){
      state[attr] -= by
    }
  }
  else{ state[attr] -= by }
}

module.exports = { init, get, set, inc, dec}
