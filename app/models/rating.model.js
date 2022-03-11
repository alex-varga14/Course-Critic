module.exports = (sequelize, Sequelize) => {
  const Rating = sequelize.define("rating", {
    comment: {
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING
    },
    helpful_analytic: {
      type: Sequelize.INTEGER
    },
    date: {
      type: Sequelize.DATE
    },
    sem_taken: {
      type: Sequelize.STRING
    },
    prof: {
      type: Sequelize.STRING
    },
    course_id: {
      type: Sequelize.STRING,
      primaryKey : true
    }
  });
  return Rating;
};
