require('dotenv').config();
const Sequelize = require('sequelize');

// Configuring database
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    idle: 1000,
  },
  logging: false,
});

// Configuring Link table
const link = sequelize.define('link', {
  originLink: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  shortLinkID: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

// Configure User table
const user = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  token: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

// Creating a foreign key
user.hasMany(link, {
  foreignKey: 'userID',
});

// Sync database
sequelize.sync();

exports.sequelize = sequelize;
exports.Sequelize = Sequelize;
exports.user = user;
exports.link = link;
