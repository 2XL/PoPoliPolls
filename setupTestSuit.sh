#! /bin/bash


mkdir public/vendor
npm install mocha chai zombie--save-dev



# mocha - test suit
cp node_modules/mocha/mocha.js public/vendor
cp node_modules/mocha/mocha.css public/vendor


#chai - assert utility
cp node_modules/chai/chai.js public/vendor


#zombie - routing
# cp node_modules/zombie.js public/vendor
# this has to be run separately
# with local console
# mocha -u tdd -R spec qa/tests-crosspage.js # 2>/dev/null # show or hide error


# sudo npm install jshint -g # report dangerouse code, and become better programmer
#jshint app.js


# linkchecker
# sudo apt-get install linkchecker


# grunt: bundle test suit runner:
# sudo npm install -g grunt-cli
# npm install --save-dev grunt
# npm install --save-dev grunt-cafe-mocha
# npm install --save-dev grunt-contrib-jshint
# npm install --save-dev grunt-exec
#
