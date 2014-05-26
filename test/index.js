
var assert = require('assert');
var bangbang = require('..');
var Hermes = require('hermes');

describe('hermes-bangbang', function(){
  it('should repeat the last command', function(done){
    var hermes = new Hermes().use(bangbang());
    hermes.hear('@hermes command');
    hermes.once('mention', 'command', function(){ done(); });
    hermes.hear('@hermes !!');
  });
});