const request = require('supertest');
const expect = require('chai').expect;
const app = require('../src/app');
const generate = require('../src/modules/generator');

const shortID = generate.randomValue(7);
const fakeLink = {
  id: 9998,
  originLink: 'http://github.com/sdvinov',
  shortLinkID: shortID,
};

describe('Routes tests', () => {
  it('Should load all links', (done) => {
    request(app)
      .get('/api/v1/urls')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(done);
  });

  it('Should load one link', (done) => {
    request(app)
      .get('/api/v1/urls/:id')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(done);
  });

  it('Should POST new link', (done) => {
    request(app)
      .post('/api/v1/url')
      .send(fakeLink)
      .expect(200)
      .end(done);
  });

  it('Should DELETE one link', (done) => {
    request(app)
      .delete('/api/v1/urls/9998')
      .expect('Content-Length', '1')
      .expect(200)
      .end(done);
  });
});
