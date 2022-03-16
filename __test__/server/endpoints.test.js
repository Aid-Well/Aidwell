/* eslint-disable node/no-unpublished-require */
const supertest = require('supertest');
const mongoose = require('mongoose');
const app = require('../../server/server');

const request = supertest(app);

describe('/', () => {
  beforeAll((done) => {
    if (!mongoose.connection.db) {
      mongoose.connection.on('connected', done);
    } else {
      done();
    }
  }, 20000);

  afterAll((done) => {
    mongoose.disconnect();
    done();
  });

  const genRanInfo = (reqChar = '') =>
    String(Math.floor(Math.random() * 1000000000)) + reqChar;

  it('Gets 404 status on bad request', async () => {
    const resp = await request.get('/;lkajsdfasl;kj');
    expect(resp.status).toBe(404);
  });

  it('Errors with no body information /user/changeFav', async () => {
    const resp = await request.put('/user/changeFav');
    expect(resp.status).toBe(500);
  });

  it('Successfully toggles favorite with /user/changeFav', async () => {
    let resp = await request
      .put('/user/changeFav')
      .send({ username: 'me', charityName: 'Test 5' });
    const newValue = resp.body[0].favorite;
    expect(resp.status).toBe(200);
    expect(typeof newValue).toBe('boolean');
    resp = await request
      .put('/user/changeFav')
      .send({ username: 'me', charityName: 'Test 5' });
    expect(resp.status).toBe(200);
    const originalValue = resp.body[0].favorite;
    expect(typeof originalValue).toBe('boolean');
    expect(!originalValue).toBe(newValue);
  });

  it('Errors with no body information /user/makeAD', async () => {
    const resp = await request.post('/user/makeAD');
    expect(resp.status).toBe(500);
  });

  it('Successfully adds donation with /user/makeAD', async () => {
    let resp = await request
      .post('/user/makeAD')
      .send({ username: 'me', charityName: 'Test 5', donationAmount: 25 });
    const newValue = resp.body[0].donationAmount;
    expect(resp.status).toBe(200);
    expect(typeof newValue).toBe('number');
    resp = await request
      .post('/user/makeAD')
      .send({ username: 'me', charityName: 'Test 5', donationAmount: 25 });
    expect(resp.status).toBe(200);
    const updatedValue = resp.body[0].donationAmount;
    expect(typeof updatedValue).toBe('number');
    expect(updatedValue).toBe(newValue + 25);
  });

  it('Errors with no body information /user/makeAD', async () => {
    const resp = await request.post('/user/makeAD');
    expect(resp.status).toBe(500);
  });

  it('Successfully adds donation with /user/makeAD', async () => {
    let resp = await request
      .post('/user/makeAD')
      .send({ username: 'me', charityName: 'Test 5', donationAmount: 25 });
    const newValue = resp.body[0].donationAmount;
    expect(resp.status).toBe(200);
    expect(typeof newValue).toBe('number');
    resp = await request
      .post('/user/makeAD')
      .send({ username: 'me', charityName: 'Test 5', donationAmount: 25 });
    expect(resp.status).toBe(200);
    const updatedValue = resp.body[0].donationAmount;
    expect(typeof updatedValue).toBe('number');
    expect(updatedValue).toBe(newValue + 25);
  });

  it('Successfully adds user if username, email, and password are input /user/signUp', async () => {
    const newUser = {};
    let resp = await request.post('/user/signUp').send(newUser);
    expect(resp.status).toBe(500);
    newUser.username = genRanInfo();
    resp = await request.post('/user/signUp').send(newUser);
    expect(resp.status).toBe(500);
    newUser.email = genRanInfo('@.');
    resp = await request.post('/user/signUp').send(newUser);
    expect(resp.status).toBe(500);
    newUser.password = genRanInfo();
    resp = await request.post('/user/signUp').send(newUser);
    expect(resp.status).toBe(200);
    expect(resp.body.charities).toEqual([]);
  });

  it('Successfully adds donation with /user/makeAD', async () => {
    let resp = await request
      .post('/user/makeAD')
      .send({ username: 'me', charityName: 'Test 5', donationAmount: 25 });
    const newValue = resp.body[0].donationAmount;
    expect(resp.status).toBe(200);
    expect(typeof newValue).toBe('number');
    resp = await request
      .post('/user/makeAD')
      .send({ username: 'me', charityName: 'Test 5', donationAmount: 25 });
    expect(resp.status).toBe(200);
    const updatedValue = resp.body[0].donationAmount;
    expect(typeof updatedValue).toBe('number');
    expect(updatedValue).toBe(newValue + 25);
  });
});
