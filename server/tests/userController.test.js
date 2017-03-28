/* eslint-disable no-unused-expressions */
const expect = require('chai').expect;
const app = require('../server.js');
const request = require('supertest');
const User = require('../users/userModel');

describe('User controller', () => {
  describe('/api/signup', () => {

  });

  describe('/api/users/:username', () => {
    beforeEach((done) => {
      User.remove({}, () => {
        new User({ username: 'bob' }).save();
        done();
      });
    });

    it('responds with correct user', (done) => {
      request(app)
        .get('/api/users/bob')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body[0].username).to.equal('bob');
          done();
        });
    });
  });
});
