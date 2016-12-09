const request = require('supertest');
const expect = require('chai').expect;
const generate = require('../src/modules/generator');

const allRoutes = [
  {
    testName: 'Get all links (GET /api/v1/urls)',
    url: '/api/v1/urls',
    method: 'get',
  },
  {
    testName: 'Get one link (GET /api/v1/url/:id)',
    url: '/api/v1/url/:id',
    method: 'get',
  },
  {
    testName: 'Get redirected (GET /go/:shortLinkID',
    url: '/go/:shortLinkID',
    method: 'get',
  },
  {
    testName: 'Get all users (GET /api/v1/users)',
    url: '/api/v1/users',
    method: 'get',
  },
  {
    testName: 'Get one user (GET /api/v1/user/:id)',
    url: '/api/v1/user/:id',
    method: 'get',
  },
  {
    testName: 'Post new link (POST /api/v1/url)',
    url: '/api/v1/url',
    method: 'post',
  },
  {
    testName: 'Update a link (POST /api/v1/urls/:id)',
    url: '/api/v1/urls/:id',
    method: 'post',
  },
  {
    testName: 'Post new user (POST /api/v1/user)',
    url: '/api/v1/user',
    method: 'post',
  },
  {
    testName: 'Update a user (POST /api/v1/users/:id)',
    url: '/api/v1/users/:id',
    method: 'post',
  },
  {
    testName: 'Delete link (DELETE /api/v1/urls/:id)',
    url: '/api/v1/urls/:id',
    method: 'delete',
  },
  {
    testName: 'Delete a user (POST /api/v1/users/:id)',
    url: '/api/v1/users/:id',
    method: 'post',
  },
];

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
