module.exports = (sequelize, Sequelize) => {
  const Review = sequelize.define("Review", {
      ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Comment: {
        type: Sequelize.STRING
      },
      Instructor: {
        type: Sequelize.STRING
      },
      Semester: {
        type: Sequelize.STRING
      },
      Date: {
        type: Sequelize.DATE
      },
      HelpfulCount: {
        type: Sequelize.INTEGER
      },
      CourseID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Courses',
          key: 'ID'
        }
      }
    },
    {
      timestamps: false
    }
  );
  
  return Review;
};
