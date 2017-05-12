const Sequelize = require('sequelize');

let db;
const options = {
  dialect: 'mysql', // default for sequelize
  port: 3306, // default port for mysql
  pool: {
    min: 1,
    max: 5,
    idle: 10000,
  },
};

process.env.DATABASE_URL ?
  db = new Sequelize(process.env.DATABASE_URL, options)
  :
  db = new Sequelize('plate_it', 'root', null, options);

db.authenticate()
  .then((err) => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.log(`Unable to connect to the database: ${err}`);
  });

module.exports = db;
