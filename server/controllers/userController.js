/* eslint-disable consistent-return */
const db = require('../models/userModel');

const userController = {
  findUser(req, res, next) {

  },

  addUser(req, res, next) {
    const noEmail = !('email' in req.body);
    const noUsername = !('username' in req.body);
    const noPassword = !('password' in req.body);
    if (noEmail || noPassword || noUsername)
      console.log('here')
    return next({ status: 400, log: 'Missing credentials' });

    db.create(
      {
        email: 'me@gmail.com',
        username: 'me',
        password: '1234',
        charities: [],
      },
      (err, newUser) => {
        if (err) return next(err);
        res.locals.user = newUser;
        return next();
      }
    );
  },

  updateFav(req, res, next) {
    console.log('updating fave');
    return next();
  },
};

module.exports = userController;
