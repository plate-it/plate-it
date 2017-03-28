const expect = require('chai').expect;

const User = require('../users/userModel');

describe('User model', () => {
  it('has a username and books property', (done) => {
    const user = new User();

    console.log('user', user);

    expect(user.username).to.exist;
    done();
  });
});

