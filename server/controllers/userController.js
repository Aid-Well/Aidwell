/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
const db = require('../models/userModel');

const userController = {
  verifyUser(req, res, next) {
    const { username, password } = req.body;
    db.find({ username }, { username: 1, password: 1, charities: 1 })
      .then((data) => {
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
      })
      .catch(() =>
        next(
          new Error(
            'Invalid credentials in userController verifyUser middleware.'
          )
        )
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

  getUserCharities(req, res, next) {
    const { charityName, username } = req.body;
    if (!charityName || !username)
      return next(
        new Error(
          'Missing information in userController getUserCharities middleware'
        )
      );

    db.find({ username }, { username: 1, charities: 1 })
      .then((data) => {
        // eslint-disable-next-line prefer-destructuring
        res.locals.user = data[0];
        next();
      })
      .catch(() =>
        next(new Error('Invalid username please logout and try again.'))
      );
  },

  parseUserCharities(req, res, next) {
    const { charityName, donationAmount, catImage, causeImage } = req.body;
    if (!donationAmount)
      return next(
        new Error('Missing donationAmount userController parseUserCharities')
      );
    const { user } = res.locals;
    let found = false;
    for (const charity of user.charities) {
      if (charity.charityName === charityName) {
        found = true;
        charity.lastDonation = new Date();
        charity.donationAmount += parseInt(donationAmount, 10);
        break;
      }
    }
    if (!found)
      user.charities.push({
        charityName,
        donationAmount: parseInt(donationAmount, 10),
        catImage,
        causeImage,
        favorite: false,
        lastDonation: new Date(),
      });
    res.locals.user = user;
    next();
  },

  updateDatabaseUserCharities(req, res, next) {
    const { user } = res.locals;
    db.updateOne(
      { username: user.username },
      { $set: { charities: user.charities } }
    )
      .then((resp) => {
        if (resp.modifiedCount < 1)
          return next(
            new Error(
              'Failed to update userController updateDatabaseUserCharities.'
            )
          );
        return next();
      })
      .catch(() =>
        next(
          new Error(
            'Invalid username at updateOne userController updateDatabaseUserCharities.'
          )
        )
      );
  },

  updateFav(req, res, next) {
    const { charityName } = req.body;
    const { user } = res.locals;
    for (const charity of user.charities) {
      if (charity.charityName === charityName) {
        charity.favorite = !charity.favorite;
        break;
      }
    }
    res.locals.user = user;
    next();
  },
};

module.exports = userController;
