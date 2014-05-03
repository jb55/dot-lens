
var exports = module.exports = lens;

function lens(path) {
  return {
    get: exports.get(path),
    set: exports.set(path)
  }
}

exports.get = function get(path) {
  return exports.getProps(path.split("."))
}

exports.set = function set(path) {
  return exports.setProps(path.split("."))
}

exports.getProps = function getProps(props) {
  var fn = exports.getter(props);
  return new Function(fn)
}

exports.setProps = function setProps(props) {
  var fn = exports.getter(props) + " = arguments[1]";
  return new Function(fn)
}

exports.getter = function getter(props) {
  var fn = "return arguments[0]"
  fn += props.reduce(function(res, prop){
    return res + lookup(prop)
  }, "")
  return fn;
}

function lookup(name) {
  return "[\"" + name + "\"]"
}
