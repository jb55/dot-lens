
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

  it('doesnt touch arrays on field names with numbers', function(){
    var touch = lens('a.b2b.c.d');
    var obj = {};
    touch(obj);
    expect(obj.a).to.not.be.a(Array);
  });

  it('multiple nested fields', function(){
    var touchA = lens('a.a.c');
    var touchB = lens('a.b.c');
    var obj = {};
    touchA(obj);
    touchB(obj);
    expect(obj).to.eql({
      a: {
        a: {},
        b: {},
      },
    });
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
