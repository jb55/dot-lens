
var expect = require('expect.js');
var lens = require('../');


describe('get lens', function(){
  it('works', function(){
    var abc = lens("a.b.c");
    var d = { a: { b: { c: 1 } } };
    expect(abc.get(d)).to.be(1);
  });
});

describe('set lens', function() {
  it('works with property', function() {
    var person = {
      name: {
        first: "bill",
        last: "casarin"
      },
      age: 25
    }

    var last = lens("name.last");
    last.set(person, 'cool');

    expect(person.name.last).to.be('cool');
    expect(last.get(person)).to.be('cool');
  });

  it('sets array elements properly', function() {
    var person = {
      tags: ["unfunny", ["poor"]]
    }

    var elem = lens("tags.1.0")
    expect(elem.get(person)).to.be("poor");
    elem.set(person, "rich")
    expect(elem.get(person)).to.be("rich");
    expect(person.tags[1][0]).to.be("rich");
  });

  it('doesnt set string characters', function() {
    var first = lens("name.0")
    var person = { name: 'bill' };

    first.set(person, "j")
    expect(person.name).to.be("bill");
    expect(first.get(person)).to.be("b");
  });
});
