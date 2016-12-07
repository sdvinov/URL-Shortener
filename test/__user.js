const expect = require('chai').expect;
const users = require('./../src/models/user');
const util = require('./../src/modules/util');
const generate = require('./../src/modules/generator');
const path = 'test/__user.js';

describe('Users model test', () => {
  // Fake user
  const userToken = generate.randomValue(15);
  const fakeUser = {
    id: 9999,
    username: 'testUsername',
    password: 'testPassword',
    token: userToken,
  };

  // Create
  it('Should create', (done) => {
    users.create(fakeUser, (err) => {
      util.debug(`User was not created {${err}}`, path, 'e');
    }, (user) => {
      expect(user.username).to.be.equal(fakeUser.username);
      expect(user.password).to.be.equal(fakeUser.password);
      expect(user.userToken).to.be.equal(fakeUser.userToken);
      done();
    });
  });

  // Read all
  it('Should read all', (done) => {
    users.findAll((err) => {
      util.debug(`All users were not found {${err}}`, path, 'e');
    }, (user) => {
      expect(user.length).to.be.above(0);
      done();
    });
  });

  // Find one
  it('Should read by ID', (done) => {
    users.find(fakeUser, (err) => {
      util.debug(`User by ID was not found {${err}}`, path, 'e');
    }, (user) => {
      expect(user.id).to.be.equal(fakeUser.id);
      done();
    });
  });

  // Update
  it('Should update by ID', (done) => {
    fakeUser.username = 'username';
    users.update(fakeUser, (err) => {
      util.debug(`User was not updated {${err}}`, path, 'e');
    }, (user) => {
      expect(user.username).to.be.equal(fakeUser.username);
      done();
    });
  });

  // Delete
  it('Should delete', (done) => {
    users.destroy(fakeUser, (err) => {
      util.debug(`User was not deleted {${err}}`, path, 'e');
    }, (success) => {
      expect(success).to.be.equal(1);
      done();
    });
  });
});
