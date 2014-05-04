
var expect = require('expect.js')
var lens = require('../').get;

describe('escaped dots', function(){
  it('are not split', function(){
    var obj = { "expect.js": "1.0.0" }
    var get = lens('expect\\.js')
    expect(get(obj)).to.be("1.0.0")
  });
});
