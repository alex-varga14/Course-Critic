const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiSubset = require('chai-subset');

const { expect } = chai.expect;

//Assertion Style
chai.should();

chai.use(chaiHttp);
chai.use(chaiSubset);


describe('GetSuggestedCourses', () => {
    describe('GET http://localhost:8080/api/courses/suggested/1', () => {

        it('Should get all course records where the Suggested attribute is true', (done) => {
            chai.request('http://localhost:8080')
            .get('/api/courses/suggested/1')
            .end((err, response) => {
                response.should.have.status(200);
                response.should.be.json;
                chai.expect(response.body).to.containSubset([{"Title":"Database Management Systems","Description":"Some Description of the Course",
                    "Faculty":"Computer Science","CourseCode":"CPSC","CourseNo":471,"Suggested":true}]);
                done();
            });
        });
    });
});

describe('ApproveSuggestedCourse', () => {
    describe('PUT http://localhost:8080/api/courses/suggested/:id', () => {
        const id = 1;
        it('Should change the Suggested attribute of a course record to false using the API', (done) => {
            chai.request('http://localhost:8080')
            .put(`/api/courses/suggested/${id}`)
            .end((err, response) => {
                response.should.have.status(200);
                response.should.be.an('object');
                response.body.should.have.property('message').eq('Course was updated successfully.');
                done();
            });
        });
    });
});

describe('GetOneCourse', () => {
    describe('GET http://localhost:8080/api/courses/:id', () => {
        const id = 1;
        it('Should get one course record with ID = 1 using the API', (done) => {
            chai.request("http://localhost:8080")
            .get(`/api/courses/${id}`)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.an('object');
                response.body.should.have.property('Title').eq('Database Management Systems');
                response.body.should.have.property('Description').eq('Some Description of the Course');
                response.body.should.have.property('Faculty').eq('Computer Science');
                response.body.should.have.property('CourseCode').eq('CPSC');
                response.body.should.have.property('CourseNo').eq(471);
                response.body.should.have.property('Suggested').eq(false);
                done();
            });
        });
    });
});

describe('GetAllCourses', () => {
    describe('GET http://localhost:8080/api/courses', () => {
        it('Should return all course records using the API', (done) => {
            const course = {
                Title: "A Test Course Title 2",
                Description: "A Test Course Description 2",
                Faculty: "A Test Course Faculty 2",
                CourseCode: "A Test Course Code 2",
                CourseNo: "123",
                Suggested: false
            }

            chai.request("http://localhost:8080")
            .post("/api/courses")
            .send(course)
            .end((err, res) => {
                chai.request("http://localhost:8080")
                .get(`/api/courses`)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.should.be.json;
                    chai.expect(response.body).to.containSubset([{"Title":"Database Management Systems","Description":"Some Description of the Course","Faculty":"Computer Science","CourseCode":"CPSC","CourseNo":471,"Suggested":false}]);
                    chai.expect(response.body).to.containSubset([{"Title":"A Test Course Title 2","Description":"A Test Course Description 2","Faculty":"A Test Course Faculty 2","CourseCode":"A Test Course Code 2","CourseNo":123,"Suggested":false}]);
                    done();
                });
            });
        });
    });
});

describe('CreateCourse', () => {
    describe('POST http://localhost:8080/api/courses', () => {

        const course = {
            Title: "A Test Course Title",
            Description: "A Test Course Description",
            Faculty: "A Test Course Faculty",
            CourseCode: "A Test Course Code",
            CourseNo: "123",
            Suggested: false
        }

        it('Should create a valid course using the API', (done) => {
            chai.request("http://localhost:8080")
            .post("/api/courses")
            .send(course)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.an('object');
                response.body.should.have.property('Title').eq('A Test Course Title');
                response.body.should.have.property('Description').eq('A Test Course Description');
                response.body.should.have.property('Faculty').eq('A Test Course Faculty');
                response.body.should.have.property('CourseCode').eq('A Test Course Code');
                response.body.should.have.property('CourseNo').eq('123');
                response.body.should.have.property('Suggested').eq(false);
                done();
            });
        });

    });
});

describe('DeleteCourse', () => {
    describe('DELETE http://localhost:8080/api/courses/:id', () => {
        const id = 1;
        it('Should delete the course record with ID = 1 using the API', (done) => {
            chai.request("http://localhost:8080")
            .delete(`/api/courses/${id}`)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.an('object');
                response.body.should.have.property('message').eq('Course was deleted successfully!');
                done();
            });
        });
    });
});

describe('DeleteAllCourses', () => {
    describe('DELETE http://localhost:8080/api/courses', () => {
        it('Should delete all course records using the API', (done) => {
            chai.request("http://localhost:8080")
            .delete('/api/courses')
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.an('object');
                response.body.should.have.property('message').eq('All Courses deleted successfully!');
                done();
            });
        });
    });
});
