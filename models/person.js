/**
 * Created by anna on 28/04/15.
 */
var mongoose = require('mongoose');

var personSchema = mongoose.Schema({
    name: String, // nom personal
    pparty: String, // partit politic
    portfolio: String, // url twitter
    rank: Number, // frequencia
    mark: Number, // qualificació
    ratio: Number, // ratio, in/out
    hit: Number, // nombre total de hits
    tags: [String], // id de tots els twitts
    gender: String // F/M
});

personSchema.methods.getDisplayRank = function(){
    return '\n' + (this.name) + tags.length;
};

var Person = mongoose.model('Person', personSchema);
module.exports = Person;


