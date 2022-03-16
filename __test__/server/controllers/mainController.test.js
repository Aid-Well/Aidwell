const { buildQuery } = require('../../../server/controllers/mainController');
const mainController = require('../../../server/controllers/mainController');

describe('mainController testing suite', () => {
  let req;
  let res;
  let next;
  beforeEach(() => {
    req = { body: {} };
    res = { locals: {} };
    next = () => console.log('hello world');
  });

  it('Should have a buildQuery method', () => {
    expect(typeof mainController.buildQuery).toBe('function');
  });

  it('buidQuery should ignore invalid inputs', () => {
    console.log(buildQuery(req, res, next));
  });

  it('Should have a getCharities method', () => {
    console.log(req, res, next);
    expect(typeof mainController.getCharities).toBe('function');
  });

  it('Should have a processCharities method', () => {
    expect(typeof mainController.processCharities).toBe('function');
  });
});
