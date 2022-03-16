/* eslint-disable node/no-unpublished-require */
const supertest = require('supertest');
const mongoose = require('mongoose');
const app = require('../../server/server');

const request = supertest(app);

const server = 'http://localhost:3000';

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

  it('Gets 404 status request', async () => {
    const resp = await request.get('/;lkajsdfasl;kj');
    expect(resp.status).toBe(404);
  });

  it('Gets 200 status on good request', async () => {
    const resp = await request.get('/test');
    expect(resp.status).toBe(200);
  });
});
