module.exports = (sequelize, Sequelize) => {
  const Admin = sequelize.define("admin", {
    username: {
      type: Sequelize.STRING,
      primaryKey : true
    },
    password: {
      type: Sequelize.STRING
    },
    authority: {
      type: Sequelize.INTEGER
    }
  });
  return Admin;
};
