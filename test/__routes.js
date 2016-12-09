const request = require('supertest');

const allRoutes = [
  {
    testName: 'Get all links (GET /api/v1/urls)',
    url: '/api/v1/urls',
    method: 'get',
  },
  {
    testName: 'Get one link (GET /api/v1/urls/:id)',
    url: '/api/v1/urls/:id',
    method: 'get',
  },
  // {
  //   testName: 'Get redirected (GET /go/:shortLinkID',
  //   url: '/go/:shortLinkID',
  //   method: 'get',
  // },
  {
    testName: 'Get all users (GET /api/v1/users)',
    url: '/api/v1/users',
    method: 'get',
  },
  {
    testName: 'Get one user (GET /api/v1/users/:id)',
    url: '/api/v1/users/:id',
    method: 'get',
  },
  {
    testName: 'Delete link (DELETE /api/v1/urls/:id)',
    url: '/api/v1/urls/:id',
    method: 'delete',
  },
  {
    testName: 'Delete a user (DELETE /api/v1/users/:id)',
    url: '/api/v1/users/:id',
    method: 'delete',
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
];

describe('Routes tests', () => {
  let server;
  beforeEach(() => {
    server = require('./../src/app');
  });

  afterEach(() => {
    server.close();
  });
  for (let route = 0; route < allRoutes.length; route++) {
    it(allRoutes[route].testName, (done) => {
      switch (allRoutes[route].method) {
        case 'get':
          request(server)
            .get(allRoutes[route].url)
            .set('Accept', 'serverlication/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(done);
          break;
        case 'post':
          request(server)
            .post(allRoutes[route].url)
            .send(123)
            .set('Accept', 'serverlication/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(done);
          break;
        case 'delete':
          request(server)
            .delete(allRoutes[route].url)
            .set('Accept', 'serverlication/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(done);
          break;
        default:
          console.log('something went wrong');
      }
    });
  }
});
