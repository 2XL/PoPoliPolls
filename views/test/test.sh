#! /bin/bash

# jade -> html & compiler ARGS
jade --pretty test.jade --obj '{args: ["Hello this is Compiler Arg"]}'
# jade -> js-debug
jade --client test.jade
# jade -> js
jade --client --no-debug test.jade





# render output
echo "test.html"
cat test.html
echo "test.js"
# cat test.js
