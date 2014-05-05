
var exports = module.exports = lens;

function lens(path) {
  return {
    get: exports.get(path),
    set: exports.set(path),
    touch: exports.touch(path)
  }
}

exports.props = {};

/**
 * get
 */

exports.get = function get(path) {
  return exports.props.get(split(path))
}

exports.props.get = function getProps(props) {
  var fn = exports.getter(props);
  return new Function(fn)
}

/**
 * set
 */

exports.set = function set(path) {
  return exports.props.set(split(path))
}

exports.props.set = function setProps(props) {
  var fn = exports.getter(props) + " = arguments[1]";
  return new Function(fn)
}

/**
 * touch
 */

exports.touch = function touch(path) {
  return exports.props.touch(split(path))
}

exports.props.touch = function touchProps(props) {
  return function(obj) {
    var root;
    props.forEach(function(prop, i){
      var next = props[i+1];

      if (obj[prop] == null)
      if (next != null)
      if (/^\d+$/.test(next))
        obj[prop] = []
      else
        obj[prop] = {}

      obj = obj[prop]
    });
  }
}

/**
 * misc
 */

exports.getter = function getter(props) {
  var fn = "return arguments[0]"
  fn += props.reduce(function(res, prop){
    return res + lookup(prop)
  }, "")
  return fn;
}

var escape = "@@LENS_ESCAPED_DOT@@";
function split(path) {
  path = path.replace("\\.", escape)
  return path.split(".").map(function(prop){
    return prop.replace(escape, ".");
  });
}

function lookup(name) {
  return "[\"" + name + "\"]"
}
