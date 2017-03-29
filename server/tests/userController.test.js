/* eslint-disable no-unused-expressions */
const expect = require('chai').expect;
const app = require('../server.js');
const request = require('supertest');
const sinon = require('sinon');
const mongoose = require('mongoose');
const User = require('../users/userModel');

describe('User controller', () => {
  describe('/api/signup', () => {
    afterEach(() => {
      User.prototype.save.restore();
    });

    it('saves a valid user', (done) => {
      sinon.stub(User.prototype, 'save').yieldsAsync(null, { username: 'bob' });
      request(app)
        .post('/api/signup')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.username).to.equal('bob');
          done();
        });
    });
  });

  describe('/api/users/:username', () => {
    afterEach(() => {
      mongoose.Query.prototype.exec.restore();
    });

    it('responds with correct user', (done) => {
      sinon.stub(mongoose.Query.prototype, 'exec').yieldsAsync(null, { username: 'bob' });
      request(app)
        .get('/api/users/bob')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body.username).to.equal('bob');
          done();
        });
    });

    it('sends error for user that does not exist', (done) => {
      sinon.stub(mongoose.Query.prototype, 'exec').yieldsAsync(null, null);
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
