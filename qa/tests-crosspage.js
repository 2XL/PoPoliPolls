/**
 * Created by anna on 28/04/15.
 */
console.log("START CROSSPAGE TEST");
// compatible mocha compatible with zombie 3.1.x
var Browser = require('zombie');
var browser;
describe('Cross-Page Tests', function () {

    /**
     * setup takes a function that will get executed by the test framework before each t
     * test is run...
     */

    setup(function () {
        console.warn("MAGIC SETUP");
        browser = new Browser();
    });


    test('requesting from home', function (done) {
            var referrer = 'http://localhost:3000/about';

            browser.visit(referrer, function () {
                console.log(browser.location.href);
                done();
                browser.clickLink('#test', function (res) {
                    console.log(browser.location.href);
                   // console.log(browser.referrer)
                    //console.log(browser)
                    if (browser.referrer === referrer)
                        done();
                });
            });


        }
    )
    ;
    /*
     test('requesting from about', function (done) {
     var referrer = 'http://localhost:3000/about';
     browser.visit(referrer, function () {
     browser.clickLink('#test', function () {
     assert(browser.field('referrer') === referrer);
     done();
     });
     });
     });
     test('visiting the "test" page directly should result in an empty referrer field',
     function (done) {
     browser.visit('http://localhost:3000/test',
     function () {
     assert(browser.field('referrer') === '');
     done();
     });
     });
     */
});
