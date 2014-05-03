
# dot-lens

  Extremely fast dot lenses. Generated lenses are compiled javascript functions.

  [![Build Status](https://travis-ci.org/jb55/dot-lens.svg)](https://travis-ci.org/jb55/dot-lens)

## Installation

  Install with npm

    $ npm install dot-lens

## Example

```js
var lens = require('dot-lens');
var last = lens("name.last")

var person = {
  name: {
    first: "bill",
    last: "casarin"
  }
}

last.get(person)
// "casarin"

last.set(person, "hi")
log(person.name.last);
// "hi"
```

## Benchmarks

    $ matcha bench.js


                          get a.b.c
             705,079 op/s » dot-component
          71,653,205 op/s » dot-lens

                          set a.b.c
             628,264 op/s » dot-component
          65,321,100 op/s » dot-lens


      Suites:  2
      Benches: 4
      Elapsed: 5,127.90 ms

## License

  The MIT License (MIT)

  Copyright (c) 2014 William Casarin

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
