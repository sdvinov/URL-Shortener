const expect = require('chai').expect;
const links = require('./../src/models/link');
const util = require('./../src/modules/util');
const generate = require('./../src/modules/generator');
const path = 'test/__links.js';

describe('Links model test', () => {
  const shortID = generate.randomValue(7);
  let fakeLink = {
    originLink: 'http://github.com/sdvinov',
    shortLinkID: shortID,
  };

  // it('Should create', (done) => {
  //   links.create(fakeLink, (err) => {
  //     util.debug(`Link was not created {${err}}`, path, 'e');
  //   }, (originLink) => {
  //     id = originLink.id;
  //     shortURL = originLink.shortID;
  //     expect(originLink.originLink).to.be.equal(fakeLink.originLink);
  //     expect(originLink.shortLinkID).to.be.equal(fakeLink.shortLinkID);
  //     done();
  //   });
  // });

  it('Should read all', (done) => {
    links.findAll((err) => {
      util.debug('All users were not found', path, 'e');
    }, (links) => {
      expect(links.length).to.be.above(0);
      done();
    });
  });
});
