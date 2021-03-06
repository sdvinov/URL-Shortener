const db = require('./db');
const util = require('utility-tool-sd');
const path = 'src/models/link.js';

// Create
exports.create = (payload, err, success) => {
  db.link.find({
    // Checking if database has originLink OR shortLinkID already
    where: payload,
  }).then((dataFromFind) => {
    // If it does, then display this link
    if (dataFromFind) {
      success(dataFromFind);
      util.debug('Link already exists, so new one was not created', path, 'n');
    } else {
      // If it does not, then create the link
      db.link.create(payload).then(success).catch((error) => {
        util.debug(error, path, 'e');
      });
      util.debug('Link was created', path, 's');
    }
  }).catch(err);
};

// Find all
exports.findAll = (err, success) => {
  db.link.findAll().then(success).catch(err);
  util.debug('All links were found', path, 's');
};

// Find one
exports.find = (payload, err, success) => {
  db.link.find({
    where: payload,
    include: [{
      all: true,
      nested: true,
    }],
  }).then(success).catch((error) => {
    util.debug(error, path, 'e');
  });
  util.debug('Link was found', path, 's');
};

// Delete
exports.destroy = (payload, error, success) => {
  db.link.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch((err) => {
    util.debug(err, path, 'e');
  });
  const id = payload.id;
  util.debug(`Link with id ${id} was deleted`, path, 's');
};

// Update
exports.update = (payload, err, success) => {
  db.link.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    const id = payload.id;
    existingData.updateAttributes(payload).then(success).catch((error) => {
      util.debug(`Failed to update link with an id ${id} after finding it {${error}}`, path, 'e');
    });
    util.debug(`Link with an id ${id} was updated`, path, 's');
  }).catch((error) => {
    util.debug(`Failed to update link, it was not found {${error}}`, path, 'e');
  });
};
