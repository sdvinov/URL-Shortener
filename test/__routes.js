const request = require('supertest');
const expect = require('chai').expect;
const generate = require('../src/modules/generator');

const shortID = generate.randomValue(7);
const fakeLink = {
  id: 9998,
  originLink: 'http://github.com/sdvinov',
  shortLinkID: shortID,
};

describe('Routes tests', () => {
  let server;
  beforeEach(() => {
    server = require('./../src/app');
  });

  afterEach(() => {
    server.close();
  });
  
  it('GET /api/v1/urls', (done) => {
    request(server)
      .get('api/v1/urls')
      .set('Accept', 'serverlication/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(done);
  });

  it('POST /api/v1/url', (done) => {
    request(server)
      .post('api/v1/url')
      .set('Accept', 'serverlication/json')
      .expect('Content-Type', /json/)
      .send(fakeLink)
      .expect(200)
      .end(done);
  });

  it('GET /api/v1/url/:id', (done) => {
    request(server)
      .get('api/v1/url/:id')
      .set('Accept', 'serverlication/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(done);
  });

  it('DELETE /api/v1/url/:id', (done) => {
    request(server)
      .delete('api/v1/url/:id')
      .set('Accept', 'serverlication/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(done);
  });
});
