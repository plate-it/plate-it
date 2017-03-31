/* eslint-disable no-unused-expressions */
const expect = require('chai').expect;
const User = require('../users/userModel');

describe('User model', () => {
  it('has a username and books property', (done) => {
    const user = new User({ username: 'cory' });

    expect(user.username).to.exist;
    expect(user.books).to.exist;
    expect(Array.isArray(user.books)).to.be.true;
    done();
  });

  it('is invalid without a username', (done) => {
    const user = new User();

    user.validate((err) => {
      expect(err.errors.username).to.exist;
      done();
    });
  });
});

