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
      },
      ReviewID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Reviews',
          key: 'ID'
        }
      }
    },
    {
      timestamps: false
    }
  );

  Rating.associate = function(models){
    Rating.belongsTo(models.course, {foreignKey: {
        name: 'CourseID'
      }
    });
    Rating.belongsTo(models.review, {foreignKey: {
        name: 'ReviewID'
      }
    });
  };
  
  return Rating;
};
