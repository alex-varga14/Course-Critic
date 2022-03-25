module.exports = app => {
  const courses = require("../controllers/course.controller.js");
  const admins = require("../controllers/admin.controller.js");
  const reviews = require("../controllers/review.controller.js");
  const ratings = require("../controllers/rating.controller.js");

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

  // Retrieve Courses with Aggregates
  router.get("/courses/get/all/aggregates", courses.getCourseAndAggregates);

  // Update a Course with id
  router.put("/courses/:id", courses.update);

  // Delete a Course with id
  router.delete("/courses/:id", courses.delete);

  // Delete all Courses
  router.delete("/courses", courses.deleteAll);

  // Set Suggested to False
  router.put("/courses/suggested/:id", courses.setSuggestedFalse);

  // Create an Admin
  router.post("/admins", admins.createAdmin);

  // Delete an Admin
  router.delete("/admins/:username", admins.deleteAdmin);

  // Get Admin by Username and Password
  router.get("/admins/:username/:password", admins.login);

  // Create a Review
  router.post("/reviews", reviews.createReview);

  // Update a Review
  router.put("/reviews/:id", reviews.updateReview);

  // Update Review HelpfulCount
  router.put("/reviews/:id/:helpfulCount", reviews.updateHelpful);

  // Delete a Review
  router.delete("/reviews/:id", reviews.deleteReview);

  // Delete all Reviews by CourseID
  router.delete("/reviews/courseID/:courseID", reviews.deleteReviewbyCourse);

  // Get Reviews by Course
  router.get("/reviews/courseID/:courseID", reviews.findReviewbyCourse);

  // Get Reviews & associated Rating by Course
  router.get("/reviews/ratings/:courseID", reviews.getReviewAndRating);

  // Get ID of last Review inserted
  router.get("/reviews/get/lastID", reviews.getLastID);

  // Create a Rating
  router.post("/ratings", ratings.createRating);

  // Update a Rating
  router.put("/ratings/:id", ratings.updateRating);

  // Delete a Rating
  router.delete("/ratings/:id", ratings.deleteRating);

  // Get Ratings by Course
  router.get("/ratings/courseID/:courseID", ratings.findRatingbyCourse);

  // Get Average Ratings by Course
  router.get("/ratings/avg/:courseID", ratings.findAverageRatings);

  // Get Rating by Review
  router.get("/ratings/reviewID/:reviewID", ratings.findRatingbyReview);

  //Delete all ratings by course id
  router.delete("/ratings/courseID/:courseID", ratings.deleteRatingsCourse);

  // Set base route for the endpoints
  app.use('/api', router);
};