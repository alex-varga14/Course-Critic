const chai = require('chai');
const chaiHttp = require('chai-http');
const request = require('supertest');
const { expect } = chai.expect;
//Assertion Style
chai.should();

chai.use(chaiHttp);

describe('CreateRating', () => {
    describe('POST http://localhost:8080/api/ratings', () => {
        let rating = {
            Enjoyment: 4,
            Difficulty: 3,
            Workload: 3,
            CourseID: 1,
            ReviewID: 2
        }

        it('it Should Create a valid rating', (done) => {
            chai.request("http://localhost:8080")
            .post("/api/ratings")
            .send(rating)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('object');
                res.body.should.have.property('Enjoyment').eq(4);
                res.body.should.have.property('Difficulty').eq(3);
                res.body.should.have.property('Workload').eq(3);
                res.body.should.have.property('CourseID').eq(1);
                res.body.should.have.property('ReviewID').eq(2);
                done();
            });
        });

    });
});

describe('DeleteRating', () => {
    describe('DELETE http://localhost:8080/api/ratings/:id', () => {
        const id = 1; 
        it('it Should Delete the rating record with ID = 1', (done) => {
            chai.request("http://localhost:8080")
            .delete(`/api/ratings/${id}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('object');
                res.body.should.have.property('message').eq('Rating was deleted successfully!');
                done();
            });
        });
    });
});
/*
describe('Get Average Ratings', () => {
    describe('GET http://localhost:8080/api/ratings/avg/:courseID', () => {
        let course = {
            Title: "A Test Course Title",
            Description: "A Test Course Description",
            Faculty: "A Test Course Faculty",
            CourseCode: "A Test Course Code",
            CourseNo: "123",
            Suggested: false
        }
        let review = {
            Comment: "Test Comment",
            Instructor:  "Test Instructor",
            Semester:  "Test Semester",
            Date:  "Test Date",
            HelpfulCount:  "Test HelpfulCount",
            CourseID: 1
        }
        let rating = {
            Enjoyment: 2,
            Difficulty: 2,
            Workload: 2,
            CourseID: 1,
            ReviewID: 2
        }
        let rating1 = {
            Enjoyment: 5,
            Difficulty: 5,
            Workload: 5,
            CourseID: 1,
            ReviewID: 2
        }
        
        it('it Should Retrieve the average Rating of course with ID = 1', (done) => {
            chai.request("http://localhost:8080")
            .delete(`/api/ratings/${id}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('object');
                
                done();
            });
        });
    });
}); */