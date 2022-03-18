const req = require("express/lib/request");
const db = require("../models");
const Admin = db.admins;
const Op = db.Sequelize.Op;

// Create and save a new course
exports.createAdmin = (req, res) => {
    // Validate the request
    if (!req.body.Username || !req.body.Password) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create an Admin from request body
    const admin = {
        Username: req.body.Username,
        Password: req.body.Password
    }

    // Save Admin to the DB
    Admin.create(admin)
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

// Delete an Admin
exports.deleteAdmin = (req, res) => {
    const username = req.params.username;

    Admin.destroy({
        where: {
            Username: username
        }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Admin was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Admin with Username = ${username}. Maybe Admin was not found!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Admin with Username = " + username
        });
    });
};

// Get Admin by Username and Password
exports.login = (req, res) => {
    const username = req.params.username;
    const password = req.params.password;

    Admin.findAll({
        where: {
            Username: username,
            Password: password
        }
    })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving Admins by Username and Password."
        });
    });
};