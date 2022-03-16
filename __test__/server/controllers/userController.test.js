const {
  updateFav,
  parseUserCharities,
  verifyUser,
  addUser,
  getUserCharities,
  updateDatabaseUserCharities,
} = require('../../../server/controllers/userController');

xdescribe('userController testing suite', () => {
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
    const updatedAmount = {
      username: 'test name',
      charities: [
        {
          charityName: 'test charity',
          donationAmount: 25,
          lastDonation: new Date(),
        },
      ],
    };
    parseUserCharities(req, res, next);
    expect(res.locals.user).toEqual(updatedAmount);
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
    const userWithAddedCharity = {
      username: 'test name',
      charities: [
        {
          charityName: 'test charity',
          donationAmount: 10,
          lastDonation: new Date(),
          catImage: '',
          causeImage: '',
          favorite: false,
        },
      ],
    };
    parseUserCharities(req, res, next);
    expect(res.locals.user).toEqual(userWithAddedCharity);
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
