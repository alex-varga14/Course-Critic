module.exports = {
  HOST: "127.0.0.1",
  USER: "root",
  PASSWORD: "AZ1BC929931Q",
  DB: "testdb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 300000,
    idle: 100000
  }
};
// min: minimum # of connections in pool, max: maximum # of connections in pool,
// idle: maximum time, in milsec, a connection can be idle, acquire: maximum time, in milsec, a pool will try to get a connection b4 throwing error
