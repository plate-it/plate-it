const Users = require('../models/userModel.js');

module.exports = {
  findUser({ body }, response) {
    Users.findOrCreate({
      where: { user_id: body.user_id },
      default: {
        name: body.name,
        nickname: body.nickname,
        email: body.email,
        picture: body.picture,
        user_id: body.user_id,
      },
    })
    .then((user) => { response.send(user); })
    .catch((error) => { response.send(error); });
  },

};
