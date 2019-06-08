/**
 * Created by hjb2722404 on 2015/11/11.
 */
var assert = require('assert');
describe('Comparing strings',function(){
    describe('when comparing the same strings',function(){
        it('should return true',function(){
            assert.strictEqual("hello","hello");
        })
    });
    describe('when comparing the same strings',function(){
        it('should return false',function(){
            assert.notStrictEqual("hello","there");
        })
    });
});