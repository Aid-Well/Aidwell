const {
  updateFav,
  parseUserCharities,
  verifyUser,
  addUser,
  getUserCharities,
  updateDatabaseUserCharities,
} = require('../../../server/controllers/userController');

describe('userController testing suite', () => {
  let req;
  let res;
  let next;
  beforeEach(() => {
    req = { body: {} };
    res = { locals: {} };
    next = () => { };
  });

  it('Should have an updateFav function', () => {
    expect(typeof updateFav).toBe('function');
  });

  it('Should update favorite charity', () => {
    req.body.charityName = 'test charity';
    res.locals.user = {
      username: 'test name',
      charities: [{ charityName: 'test charity', favorite: false }],
    };
    const updatedUser = {
      username: 'test name',
      charities: [{ charityName: 'test charity', favorite: true }],
    };
    updateFav(req, res, next);
    expect(res.locals.user).toEqual(updatedUser);
  });

  it('Should have an parseUserCharities function', () => {
    expect(typeof parseUserCharities).toBe('function');
  });

  it('Should update an already existing charity', () => {
    req.body.charityName = 'test charity';
    req.body.donationAmount = 10;
    req.body.username = 'test user';
    req.body.catImage = '';
    req.body.causeImage = '';
    res.locals.user = {
      username: 'test name',
      charities: [{ charityName: 'test charity', donationAmount: 15 }],
    };
    parseUserCharities(req, res, next);
    expect(res.locals.user.charities[0].donationAmount).toEqual(25);
  });

  it('Should add a new charity', () => {
    req.body.charityName = 'test charity';
    req.body.donationAmount = 10;
    req.body.username = 'test user';
    req.body.catImage = '';
    req.body.causeImage = '';
    res.locals.user = {
      username: 'test name',
      charities: [],
    };
    parseUserCharities(req, res, next);
    expect(res.locals.user.charities[0].donationAmount).toEqual(10);
  });

  it('Should have an verifyUser function', () => {
    expect(typeof verifyUser).toBe('function');
  });

  it('Should have an addUser function', () => {
    expect(typeof addUser).toBe('function');
  });

  it('Should have an getUserCharities function', () => {
    expect(typeof getUserCharities).toBe('function');
  });

  it('Should have an updateDatabaseUserCharities function', () => {
    expect(typeof updateDatabaseUserCharities).toBe('function');
  });
});
