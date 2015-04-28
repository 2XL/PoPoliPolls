/**
 * Created by anna on 28/04/15.
 */
var fortune = require('../lib/library/library.js');


var expect = require('chai').expect;


suite('Fortune cookie tests', function(){

    test('getFortune() should return a fortune', function(){
        expect(typeof fortune.getFortune() === 'string');
    });
});