var state = {}

function init(){
  state = {
  quirkk: 0, widthh: 60, energy: 1, repeat: 3, tensor: 3, yessss: 12,
  color: '#D711B4',
  angle: -90, pointSize: 2, lineWidth: 1, toggleStroke: true, rotate: false
  }
  return state
}

function get(){
  return state
}

function set(attr, to){
  state[attr] = to
}

function inc(attr, by){
  state[attr] += by
}

function dec(attr, by){
  state[attr] -= by
}


module.exports = { init, get, set, inc, dec }
