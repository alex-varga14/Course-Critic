const chai = require('chai');
const chaiHttp = require('chai-http');
const chaiSubset = require('chai-subset');

const { expect } = chai.expect;

//Assertion Style
chai.should();

chai.use(chaiHttp);
chai.use(chaiSubset);

describe('CreateRating', () => {
    describe('POST http://localhost:8080/api/ratings', () => {
        const rating = {
            Enjoyment: 3,
            Difficulty: 4,
            Workload: 2,
            CourseID: null,
            ReviewID: null
        }

        it('Should create a valid rating record using the API', (done) => {
            chai.request("http://localhost:8080")
            .post("/api/ratings")
            .send(rating)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.an('object');
                response.body.should.have.property('Enjoyment').eq(3);
                response.body.should.have.property('Difficulty').eq(4);
                response.body.should.have.property('Workload').eq(2);
                response.body.should.have.property('CourseID').eq(null);
                response.body.should.have.property('ReviewID').eq(null);
                done();
            });
        });
    });
});

describe('DeleteRating', () => {
    describe('DELETE http://localhost:8080/api/ratings/:id', () => {
        const id = 1;
        it('Should delete a rating record with ID = 1 using the API', (done) => {
            chai.request('http://localhost:8080')
            .delete(`/api/ratings/${id}`)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.an('object');
                response.body.should.have.property('message').eq('Rating was deleted successfully!');
                done();
            });
        });
    });
});
