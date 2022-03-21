const req = require("express/lib/request");
const { sequelize } = require("../models");
const db = require("../models");
const ratingModel = require("../models/rating.model");
const Course = db.courses;
const Op = db.Sequelize.Op;


// Create and Save a new Course
exports.create = (req, res) => {
  // Validate request
  if (!req.body.Title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Course
  const course = {
    Title: req.body.Title,
    Description: req.body.Description,
    Faculty: req.body.Faculty,
    CourseCode: req.body.CourseCode,
    CourseNo: req.body.CourseNo,
    Semester: req.body.Semester,
    Suggested: req.body.Suggested
  };

  // Save Course in the database
  Course.create(course)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Course."
      });
    });
};

// Retrieve all Courses from the database.
exports.findAllCourses = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Course.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving courses."
      });
    });
};

// Search Course by Primary Key
exports.findCourseByPK = (req, res) => {
  const id = req.params.id;

  Course.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Course with id=" + id
      });
    });
};

// Update a Course by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Course.update(req.body, {
    where: { ID: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Course was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Course with id=${id}. Maybe Course was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Course with id=" + id
      });
    });
};

// Delete a Course with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Course.destroy({
    where: { ID: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Course was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Course with id=${id}. Maybe Course was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Course with id=" + id
      });
    });
};

// Delete all Courses from the database.
exports.deleteAll = (req, res) => {
  Course.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Courses were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Courses."
      });
    });
};

// Get Course by Faculty
exports.findCoursebyFaculty = (req, res) => {
  const faculty = req.params.Faculty;

  Course.findAll({
    where: {
      Faculty: faculty
    }
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving courses by faculty."
    });
  });
};

// Get Course by Suggested
exports.findSuggestedCourses = (req, res) => {
  const sug = req.params.sug;

  Course.findAll({
    where: {
      suggested: sug
    }
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occured while retrieving suggested courses."
    });
  });
};

// Get Course by Title
exports.findCoursebyTitle = (req, res) => {
  const title = req.params.title;

  Course.findAll({
    where: {
      Title: title
    }
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occured while retrieving courses by title."
    });
  });
};

// Get Course by CourseCode
exports.findCoursebyCourseCode = (req, res) => {
  const courseCode = req.params.courseCode;

  Course.findAll({
    where: {
      CourseCode: courseCode
    }
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occured while retrieving courses by course code."
    });
  });
};

// Get Course by CourseCode and CourseNo
exports.findCoursebyCodeandNo = (req, res) => {
  const courseCode = req.params.courseCode;
  const courseNo = req.params.courseNo;

  Course.findAll({
    where: {
      CourseCode: courseCode,
      CourseNo: courseNo
    }
  })
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occured while retrieving courses by course code and course number."
    });
  });
};

// Get all Courses, as well as average Ratings and # of Reviews
exports.getCourseAndAggregates = (req, res) => {
  
  sequelize.query(
    'SELECT Courses.ID, Courses.Title, Courses.Description, Courses.Faculty, Courses.CourseCode, Courses.CourseNo, AVG(Ratings.Enjoyment), AVG(Ratings.Difficulty), AVG(Ratings.Workload), COUNT(DISTINCT(Reviews.ID)) FROM Courses LEFT OUTER JOIN Ratings ON Ratings.CourseID = Courses.ID LEFT OUTER JOIN Reviews ON Reviews.CourseID = Courses.ID WHERE Suggested = false GROUP BY Courses.ID;'
  )
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occured while retrieving courses with aggregates."
    });
  });
};