const expect = require('chai').expect;
const links = require('./../src/models/link');
const util = require('./../src/modules/util');
const generate = require('./../src/modules/generator');
const path = 'test/__links.js';

describe('Links model test', () => {
  const shortID = generate.randomValue(7);
  let fakeLink = {
    id: 9999,
    originLink: 'http://github.com/sdvinov',
    shortLinkID: shortID,
  };

  let fakeId;

  it('Should create', (done) => {
    links.create(fakeLink, (err) => {
      util.debug(`Link was not created {${err}}`, path, 'e');
    }, (originLink) => {
      const fakeId = originLink.id;
      const shortURL = originLink.shortID;
      expect(originLink.originLink).to.be.equal(fakeLink.originLink);
      expect(originLink.shortLinkID).to.be.equal(fakeLink.shortLinkID);
      done();
    });
  });

  it('Should read all', (done) => {
    links.findAll((err) => {
      util.debug('All links were not found', path, 'e');
    }, (links) => {
      expect(links.length).to.be.above(0);
      done();
    });
  });

  it('Should read by ID', (done) => {
    links.find((err) => {
      util.debug('Link by ID was not found', path, 'e');
    }, (link) => {

    });
  });

  it('Should delete', (done) => {
    links.destroy(fakeLink, (err) => {
      util.debug('Link was not deleted', path, 'e');
    }, (success) => {
      expect(success).to.be.equal(1);
      done();
    });
  });
});
