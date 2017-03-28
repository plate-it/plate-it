/* eslint-disable no-unused-expressions */
const expect = require('chai').expect;
const app = require('../server.js');
const request = require('supertest');
const sinon = require('sinon');
const User = require('../users/userModel');

describe('User controller', () => {
  describe('/api/signup', () => {

  });

  describe('/api/users/:username', () => {
    it('responds with correct user', (done) => {
      const stubbedFindOne = sinon.stub(User, 'findOne');
      stubbedFindOne.returns({ exec: (cb) => {
        cb(null, { username: 'bob' });
      } });
      request(app)
        .get('/api/users/bob')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.username).to.equal('bob');
          done();
        });
      User.findOne.restore();
    });

    it('sends error for user that does not exist', (done) => {
      request(app)
        .get('/api/users/noone')
        .end((err, res) => {
          expect(res.status).to.equal(400);
          expect(res.body.error).to.equal('User not found');
          done();
        });
    });
  });
});
