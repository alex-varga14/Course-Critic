const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiSubset = require('chai-subset');

const { expect } = chai.expect;

//Assertion Style
chai.should();

chai.use(chaiHttp);
chai.use(chaiSubset);

describe('CreateReview', () => {
    describe('POST http://localhost:8080/api/reviews', () => {
        const review = {
            Comment: "A Test Comment",
            Instructor: "A Test Instructor",
            Semester: "A Test Semester",
            Date: "2022-03-29",
            HelpfulCount: 9,
            CourseID: null
        }

        it('Should create a valid review record using the API', (done) => {
            chai.request('http://localhost:8080')
            .post('/api/reviews')
            .send(review)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.an('object');
                response.body.should.have.property('Comment').eq('A Test Comment');
                response.body.should.have.property('Instructor').eq('A Test Instructor');
                response.body.should.have.property('Semester').eq('A Test Semester');
                response.body.should.have.property('HelpfulCount').eq(9);
                done();
            });
        });
    });
});

describe('GetLastReviewID', () => {
    describe('GET http://localhost:8080/api/reviews/get/lastID', () => {
        it('Should get the ID of the last review record inserted', (done) => {
            chai.request('http://localhost:8080')
            .get('/api/reviews/get/lastID')
            .end((err, response) => {
                response.should.have.status(200);
                chai.expect(response.body).to.containSubset([{"LAST_INSERT_ID()":1}]);
                done();
            });
        });
    });
});

describe('UpdateHelpfulCount', () => {
    describe('PUT http://localhost:8080/api/reviews/:id/:helpfulCount', () => {
        const helpfulCount = 10;
        const id = 1;

        it('Should update the HelpfulCount of a review record using the API', (done) => {
            chai.request('http://localhost:8080')
            .put(`/api/reviews/${id}/${helpfulCount}`)
            .end((err, response) => {
                response.should.have.status(200);
                response.should.be.an('object');
                response.body.should.have.property('message').eq('Review was updated successfully.');
                done();
            });
        });
    });
});

describe('DeleteReview', () => {
    describe('DELETE http://localhost:8080/api/reviews/:id', () => {
        const id = 1;
        it('Should delete a review record via its primary key using the API', (done) => {
            chai.request('http://localhost:8080')
            .delete(`/api/reviews/${id}`)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.an('object');
                response.body.should.have.property('message').eq('Review was deleted successfully!');
                done();
            });
        });
    });
});