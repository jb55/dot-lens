
var exports = module.exports = lens;

function lens(path) {
  return {
    get: exports.get(path),
    set: exports.set(path)
  }
}

exports.get = function get(path) {
  return exports.getProps(split(path))
}

exports.set = function set(path) {
  return exports.setProps(split(path))
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
  console.log(fn);
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
