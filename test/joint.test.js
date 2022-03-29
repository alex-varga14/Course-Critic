const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiSubset = require('chai-subset');

const { expect } = chai.expect;

//Assertion Style
chai.should();

chai.use(chaiHttp);
chai.use(chaiSubset);

describe('GetAvgRatingsForCourse', () => {
    describe('GET http://localhost:8080/api/ratings/avg/:courseID', () => {
        const courseID = 4;
        it('Should get the average rating for a course record with ID = 4 using the API', (done) => {
            const course = {
                Title: "A Test Course Title 3",
                Description: "A Test Course Description 3",
                Faculty: "A Test Course Faculty 3",
                CourseCode: "A Test Course Code 3",
                CourseNo: "123",
                Suggested: false
            }
            const review1 = {
                Comment: "A Test Comment 2",
                Instructor: "A Test Instructor 2",
                Semester: "A Test Semester 2",
                Date: "2022-03-29",
                HelpfulCount: 2,
                CourseID: 4
            }
            const review2 = {
                Comment: "A Test Comment 3",
                Instructor: "A Test Instructor 3",
                Semester: "A Test Semester 3",
                Date: "2022-03-29",
                HelpfulCount: 3,
                CourseID: 4
            }
            const rating1 = {
                Enjoyment: 2,
                Difficulty: 5,
                Workload: 5,
                CourseID: 4,
                ReviewID: 2
            }
            const rating2 = {
                Enjoyment: 4,
                Difficulty: 1,
                Workload: 2,
                CourseID: 4,
                ReviewID: 3
            }
        
            chai.request("http://localhost:8080")
            .post("/api/courses")
            .send(course)
            .end((err, response) => {
                
                chai.request('http://localhost:8080')
                .post('/api/reviews')
                .send(review1)
                .end((err, response) => {
        
                    chai.request("http://localhost:8080")
                    .post("/api/ratings")
                    .send(rating1)
                    .end((err, response) => {
        
                        chai.request('http://localhost:8080')
                        .post('/api/reviews')
                        .send(review2)
                        .end((err, response) => {
        
                            chai.request("http://localhost:8080")
                            .post("/api/ratings")
                            .send(rating2)
                            .end((err, response) => {
                                chai.request('http://localhost:8080')
                                .get(`/api/ratings/avg/${courseID}`)
                                .end((err, response) => {
                                    response.should.have.status(200);
                                    chai.expect(response.body).to.containSubset([{"avgEnjoyment":"3.0000","avgDifficulty":"3.0000","avgWorkload":"3.5000"}]);
                                    done();
                                });
                            });
        
                        });
        
                    });
        
                });
            
            });

        });
    });
});

describe('GetReviewsAndRatingForCourse', () => {
    describe('GET http://localhost:8080/api/reviews/ratings/:courseID', () => {
        const courseID = 4;
        it('Should get all reviews & associated ratings for a course using the API', (done) => {
            chai.request('http://localhost:8080')
            .get(`/api/reviews/ratings/${courseID}`)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.an('array');
                chai.expect(response.body).to.containSubset([{"Comment":"A Test Comment 2","Instructor":"A Test Instructor 2",
                    "Semester":"A Test Semester 2","HelpfulCount":2,"Enjoyment":2,"Difficulty":5,"Workload":5}]);
                chai.expect(response.body).to.containSubset([{"Comment":"A Test Comment 3","Instructor":"A Test Instructor 3",
                    "Semester":"A Test Semester 3","HelpfulCount":3,"Enjoyment":4,"Difficulty":1,"Workload":2}]);
                done();
            });
        });
    });
});

describe('GetCourseAndAvgRating', () => {
    describe('GET http://localhost:8080/api/courses/get/all/aggregates', () => {
        it('Should get all approved courses, along with their average ratings and review count using the API', (done) => {
            chai.request('http://localhost:8080')
            .get('/api/courses/get/all/aggregates')
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.an('array');
                chai.expect(response.body).to.containSubset([{"ID":4,"Title":"A Test Course Title 3","Description":"A Test Course Description 3",
                    "Faculty":"A Test Course Faculty 3","CourseCode":"A Test Course Code 3","CourseNo":123,"Enjoyment":"3.0000","Difficulty":"3.0000",
                    "Workload":"3.5000","NumReviews":2}]);
                done();
            });
        });
    });
});
