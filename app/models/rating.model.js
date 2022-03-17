module.exports = (sequelize, Sequelize) => {
  const Rating = sequelize.define("Rating", {
      ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Enjoyment: {
        type: Sequelize.INTEGER
      },
      Difficulty: {
        type: Sequelize.INTEGER
      },
      Workload: {
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
  
  return Rating;
};
