const chai = require('chai');
const chaiHttp = require('chai-http');
const request = require('supertest');
// const { server } = require('server.js');

const { expect } = chai.expect;

//Assertion Style
chai.should();

chai.use(chaiHttp);

describe('AuthenticateLogin', () => {

    // Test the GET route for admin login
    describe('GET http://localhost:8080/api/admins/:username/:password', () => {
        const username = "Test Username";
        const password = "Test Password";

        it('Should return the admin record corresponding to the username & password', (done) => {
            chai.request("http://localhost:8080/")
            .get(`api/admins/${username}/${password}`)
            .end((err, response) => {
                response.should.have.status(200);
                response.body.should.be.a('array');
                chai.expect(response.body).to.eql([{"Username":"Test Username","Password":"Test Password"}]);
                done();
            });
        });
    });

});



