
var dot = require('dot-component');
var lens = require('./');

suite('get a.b.c', function () {
  var get = lens.get('a.b.c');
  var obj = { a: { b: { c: 1 } } };

  bench('dot-component', function() {
    dot.get(obj, 'a.b.c')
  });

  bench('dot-lens', function() {
    get(obj);
  });
});

suite('set a.b.c', function () {
  var set = lens.set('a.b.c');
  var obj = { a: { b: { c: 1 } } };

  bench('dot-component', function() {
    dot.set(obj, 'a.b.c', 2)
  });

  bench('dot-lens', function() {
    set(obj, 2);
  });
});
