const req = require("express/lib/request");
const { sequelize } = require("../models");
const db = require("../models");
const Rating = db.ratings;
const Op = db.Sequelize.Op;

// Create a Rating
exports.createRating = (req, res) => {
    // Validate the request
    if (!req.body.Enjoyment) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create an instance of a Rating
    const rating = {
        Enjoyment: req.body.Enjoyment,
        Difficulty: req.body.Difficulty,
        Workload: req.body.Workload,
        CourseID: req.body.CourseID,
        ReviewID: req.body.ReviewID
    }

    Rating.create(rating)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Rating."
        });
    });
};

// Update a Rating
exports.updateRating = (req, res) => {
    const id = req.params.id;

    Rating.update(req.body, {
        where: {
            ID: id
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Rating was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Rating with ID = ${id}. Maybe Rating was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Rating with ID = " + id
        });
    });
};

// Delete a Rating
exports.deleteRating = (req, res) => {
    const id = req.params.id;

    Rating.destroy({
        where: {
            ID: id
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Rating was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Rating with ID = ${id}. Maybe Rating was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Rating with ID = " + id
        });
    });
};

// Get all Ratings of a specific course
exports.findRatingbyCourse = (req, res) => {
    const courseID = req.params.courseID;

    Rating.findAll({
        where: {
            CourseID: courseID
        }
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving Ratings by CourseID."
        });
    });
};

// Get all Ratings associated with a specific Review
exports.findRatingbyReview = (req, res) => {
    const reviewID = req.params.reviewID;

    Rating.findAll({
        where: {
            ReviewID: reviewID
        }
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving Ratings by ReviewID."
        });
    });
};

// Get Average Ratings for a Course
exports.findAverageRatings = (req, res) => {
    const courseID = req.params.courseID;

    sequelize.query(
        "SELECT AVG(Enjoyment) as avgEnjoyment, AVG(Difficulty) as avgDifficulty, AVG(Workload) as avgWorkload FROM Ratings WHERE CourseID = " + courseID + ";", {
            type: sequelize.QueryTypes.SELECT
        }
    )
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occured while retrieving average ratings."
        });
    });
};
// Delete all Ratings by CourseID
exports.deleteRatingsCourse = (req, res) => {
    const courseID = req.params.courseID;

    Rating.destroy({
        where: {
            CourseID: courseID
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Rating was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Rating with CourseID = ${courseID}. Maybe Rating was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Could not delete Rating with CourseID = ${req.params.courseID}`
        });
    });
};

// Delete All ratings by review ID
exports.deleterRatingbyReview = (req, res) => {
    const reviewID = req.params.reviewID;

    Rating.destroy({
        where: {
            ReviewID: reviewID
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Rating was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Rating with ReviewID = ${reviewID}. Maybe Rating was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: `Could not delete Rating with CourseID = ${reviewID}`
        });
    });
}