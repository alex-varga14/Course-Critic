//var Rating = require("../models/rating.model");
const db = require("../models");

module.exports = (sequelize, Sequelize) => {
  const Course = sequelize.define("Course", {
      ID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      Title: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.STRING
      },
      Faculty: {
        type: Sequelize.STRING
      },
      CourseCode: {
        type: Sequelize.STRING
      },
      CourseNo: {
        type: Sequelize.INTEGER
      },
      Suggested: {
        type: Sequelize.BOOLEAN
      }
    },
    {
      timestamps: false
    }
  );

  Course.associate = function(models){
    Course.hasMany(models.Rating, {foreignKey: {
        name: 'CourseID',
        allowNull: false
      },
      onDelete: 'cascade'
    });
    Course.hasMany(models.Review, {foreignKey: {
        name: 'CourseID',
        allowNull: false
      },
      onDelete: 'cascade'
    });
  };
  // Course.hasMany(Sequelize.model.ratings, {foreignKey: {
  //     name: 'CourseID',
  //     allowNull: false
  //   },
  //   onDelete: 'cascade'
  // });

  // Course.hasMany(db.reviews, {foreignKey: {
  //     name: 'CourseID',
  //     allowNull: false
  //   },
  //   onDelete: 'cascade'
  // });


  return Course;
};

// This Sequelize Model will represent 'courses' table in MySQL database.
// These columns will be generated automatically:
//  id, title, description, published, createdAt, updatedAt

// After initializing Sequelize, we dont need CRUD functions, Sequelize supports all:
// create a new Course: create(object)
// find a Course by id: findByPk(id)
// get all Courses: findAll()
// update a Course by id: update(data, where: { id: id })
// remove a Course: destroy(where: { id: id })
// remove all Courses: destroy(where: {})
// find all Courses by title: findAll({ where: { title: ... } })

// These functions will be used in controller
