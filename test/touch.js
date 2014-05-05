
var expect = require('expect.js')
var lens = require('../').touch;

describe('touch', function(){
  it('works for arrays', function(){
    var touch = lens('a.0');
    var obj = {};
    touch(obj);
    expect(obj).to.eql({ a: [] })
  });

  it('does nothing on single prop', function(){
    var touch = lens('a');
    var obj = {};
    touch(obj);
    expect(obj).to.eql({});
  });

  it('nested fields', function(){
    var touch = lens('a.b.c');
    var obj = {};
    touch(obj);
    expect(obj).to.eql({ a: { b: {} } });
  });

  it('nested fields with arrays', function(){
    var touch = lens('a.b.c.0.1.d.name');
    var obj = {};
    touch(obj);
    expect(obj).to.eql({ a: { b: { c: [[,{d:{}}]]} } });
  });
});
