import solution = require('../solution');

import {assert} from "chai";

describe("HelloWorldTest", function(){
  it("AssertHelloWorld", function(){
    assert.equal(solution.helloWorld(), "Hello World!");   
  });
});