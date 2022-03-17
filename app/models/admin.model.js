module.exports = (sequelize, Sequelize) => {
  const Admin = sequelize.define("Admin", {
      Username: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      Password: {
        type: Sequelize.STRING
      }
    },
    {
      timestamps: false
    }
  );

  return Admin;
};
