module.exports = app => {
  const courses = require("../controllers/course.controller.js");
  const admins = require("../controllers/admin.controller.js");

  var router = require("express").Router();

  // Create a new Course
  router.post("/courses", courses.create);

  // Retrieve all Courses
  router.get("/courses", courses.findAllCourses);

  // Retrieve a single Course with id
  router.get("/courses/:id", courses.findCourseByPK);

  //Retrieve Courses by Faculty
  router.get("/courses/faculty/:Faculty", courses.findCoursebyFaculty);

  // Retrieve Suggested Courses
  router.get("/courses/suggested/:sug", courses.findSuggestedCourses);

  // Retrieve Course by Title
  router.get("/courses/title/:title", courses.findCoursebyTitle);

  // Retrieve Courses by Course Code
  router.get("/courses/courseCode/:courseCode", courses.findCoursebyCourseCode);

  // Retrieve Courses by CourseCode and CourseNo
  router.get("/courses/:courseCode/:courseNo", courses.findCoursebyCodeandNo);

  // Update a Course with id
  router.put("/courses/:id", courses.update);

  // Delete a Course with id
  router.delete("/courses/:id", courses.delete);

  // Delete all Courses
  router.delete("/courses", courses.deleteAll);

  // Create an Admin
  router.post("/admins", admins.createAdmin);

  // Delete an Admin
  router.delete("/admins/:username", admins.deleteAdmin);

  // Get Admin by Username and Password
  router.get("/admins/:username/:password", admins.login);

  app.use('/api', router);
};
