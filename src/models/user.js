const db = require('./db');

// Create
exports.create = (payload, err, success) => {
  db.user.create(payload).then(success).catch(err);
};

// Find all
exports.findAll = (err, success) => {
  db.user.findAll().then(success).catch(err);
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
  }).then(success).catch(err);
};

// Delete
exports.destroy = (payload, err, success) => {
  db.user.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
};

// Update
exports.update = (payload, err, success) => {
  db.user.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
};
