const expect = require('chai').expect;

describe('Basic Test Suite', () => {
  it('Tests for health of API', () => {

  });

  it('Tests for Health', () => {
    const rawData = require('./../src/fake.json');
    expect(rawData.fakeHealth).to.be.equal(true);
  });
});
