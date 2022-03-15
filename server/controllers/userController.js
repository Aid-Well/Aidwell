/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
const db = require('../models/userModel');

const userController = {
  verifyUser(req, res, next) {
    const { username, password } = req.body;
    db.find({ username }, { username: 1, password: 1, charities: 1 }).then(
      (data) => {
        const checkPassword = password === data[0].password;
        if (!checkPassword)
          return next(
            new Error(
              'Invalid credentials in userController verifyUser middleware.'
            )
          );
        res.locals.user = {
          username: data[0].username,
          charities: data[0].charities,
        };
        return next();
      }
    );
  },

  addUser(req, res, next) {
    const { email, username, password } = req.body;
    const missingArg = !email || !username || !password;
    const badEmail =
      typeof email !== 'string' || !email.includes('@') || !email.includes('.');
    const badUsername = typeof username !== 'string';
    const badPassword = typeof password !== 'string';
    if (missingArg || badEmail || badUsername || badPassword)
      return next(
        new Error('Invalid credentials in userController adUser middleware.')
      );

    db.create(
      {
        email,
        username,
        password,
        charities: [],
      },
      (err, newUser) => {
        if (err) return next(err);
        // eslint-disable-next-line no-shadow
        const { username, charities } = newUser;
        res.locals.user = { username, charities };
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
