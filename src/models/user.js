const db = require('./db');
const util = require('./../modules/util');
const path = 'src/models/user.js';

// Create
exports.create = (payload, err, success) => {
  db.user.create(payload).then(success).catch((error) => {
    util.debug(`User was not created {${error}}`, path, 'e');
  });
  util.debug('User was created', path, 's');
};

// Find all
exports.findAll = (err, success) => {
  db.user.findAll().then(success).catch((error) => {
    util.debug(`Users were not found {${error}}`, path, 'e');
  });
  util.debug('Users were found', path, 's');
};

// Find one
exports.find = (payload, err, success) => {
  db.user.find({
    where: {
      id: payload.id,
    },
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch((error) => {
    util.debug(`User was not found {${error}}`, path, 'e');
  });
  util.debug('User was found', path, 's');
};

// Delete
exports.destroy = (payload, err, success) => {
  db.user.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch((error) => {
    util.debug(`User was not deleted {${error}}`, path, 'e');
  });
  util.debug('User was deleted', path, 's');
};

// Update
exports.update = (payload, err, success) => {
  db.user.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch((error) => {
      util.debug(`User was not updated after finding {${error}}`, path, 'e');
    });
    util.debug('User was updated', path, 's');
  }).catch((error) => {
    util.debug(`User was not deleted and was not found {${error}}`, path, 'e');
  });
};
