#! /bin/bash

# jade -> html
jade --pretty test.jade
# jade -> js-debug
jade --client test.jade
# jade -> js
jade --client --no-debug test.jade





# render output
echo "test.html"
cat test.html
echo "test.js"
cat test.js
