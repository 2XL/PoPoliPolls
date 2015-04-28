/**
 * Created by anna on 28/04/15.
 */

console.log("LOCAL ABOUT LOADED");

mocha.ui('tdd');

// mocha supports TDD or BDD
var assert = chai.assert;



suite('Test test', function(){
    test('page has a valid title', function(){
        assert(document.title && document.title.match(/\S/) && document.title.toUpperCase() !== 'TODO');
    });

    test('page should contain link to home page', function(){
        assert($('a[href="/"]').length);
    });

});


mocha.run();