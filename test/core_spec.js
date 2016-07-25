import {expect} from 'chai';
import {hello} from '../src/core';

describe('core', () => {
  it('should print "hello world"', () => {
    const core_hello = hello();
    expect(core_hello).to.equal("Hello World");
  })
});
