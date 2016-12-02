const db = require('./db');

// Create
exports.create = (payload, err, success) => {
  db.link.find({
    where: db.Sequelize.or (
      { originLink: payload.originLink },
      { shortLinkID: payload.shortLinkID }
    ),
  }).then((dataFromFind) => {
    if (dataFromFind) {
      success(dataFromFind);
    } else {
      db.link.create(payload).then(success).catch(err)
    };
  }).catch(err);
};

// Find all
exports.findAll = (err, success) => {
  db.link.findAll().then(success).catch(err);
};

// Find one
exports.find = (payload, err, success) => {
  db.link.find({
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
  db.link.destroy({
    where: {
      id: payload.id,
    },
  }).then(success).catch(err);
};

// Update
exports.update = (payload, err, success) => {
  db.link.find({
    where: {
      id: payload.id,
    },
  }).then((existingData) => {
    existingData.updateAttributes(payload).then(success).catch(err);
  }).catch(err);
};

exports.go = (payload, err, success) => {
  db.link.find({
    where: {
      shortLinkID: payload.shortLinkID,
    },
  }).then(success).catch(err);
};
