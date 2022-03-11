module.exports = (sequelize, Sequelize) => {
  const Review = sequelize.define("review", {
    score: {
      type: Sequelize.STRING
    },
    course_id: {
      type: Sequelize.STRING,
      primaryKey : true
    }
  });
  return Review;
};
