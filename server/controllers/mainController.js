/* eslint-disable no-param-reassign */
const axios = require('axios');
const db = require('../model');

const mainController = {
  getCharities(req, res, next) {
    let query = process.env.APIURL;
    if ('search' in req.body && typeof req.body.search === 'string')
      query += `&search=${req.body.search}`;
    if (
      'fundraisingOrgs' in req.body &&
      typeof req.body.fundraisingOrgs === 'boolean'
    )
      query += `&fundraisingOrgs=${req.body.fundraisingOrgs}`;
    if ('state' in req.body && req.body.state.length === 2)
      query += `&state=${req.body.state.toUpperCase()}`;
    if ('city' in req.body) query += `&city=${req.body.city}`;
    if ('zip' in req.body && req.body.zip.length === 5)
      query += `&zip=${req.body.zip}`;
    if (
      'sizeRange' in req.body &&
      req.body.sizeRange > 0 &&
      req.body.sizeRange <= 3
    )
      query += `&sizeRange=${req.body.sizeRange}`;
    if (
      'donorPrivacy' in req.body &&
      typeof req.body.donorPrivacy === 'boolean'
    )
      query += `&donorPrivacy=${req.body.donorPrivacy}`;
    if ('scopeOfWork' in req.body) {
      const scope = req.body.scopeOfWork;
      if (
        scope === 'ALL' ||
        scope === 'REGIONAL' ||
        scope === 'NATIONAL' ||
        scope === 'INTERNATIONAL'
      )
        query += `&scopeOfWork=${scope}`;
    }
    if (
      'noGovSupport' in req.body &&
      typeof req.body.noGovSupport === 'boolean'
    )
      query += `&noGovSupport=${req.body.noGovSupport}`;

    console.log(`Searching for ${query}`);
    axios
      .get(query)
      .then((charities) => {
        res.locals.raw = charities.data;
        next();
      })
      .catch((err) => {
        err.status = err.response.status;
        err.log = 'Error in mainController getCharities middleware.';
        next(err);
      });
  },

  processCharities(req, res, next) {
    if (typeof res.locals.raw !== 'object')
      return next({
        log: 'Error in mainController processCharities middleware.',
      });

    res.locals.parsed = res.locals.raw.reduce((acc, curr) => {
      const charity = {};
      charity.name = curr.organization?.charityName;
      charity.mission = curr.mission;
      charity.link = curr.charityNavigatorURL;
      charity.catImage = curr.category?.image;
      charity.causeImage = curr.cause?.image;
      if (curr.currentRating) {
        charity.overAllScore = curr.currentRating.score;
        charity.financialRating = curr.currentRating.financialRating?.score;
        charity.accountabilityRating =
          curr.currentRating.accountabilityRating?.score;
      }
      charity.deductibility = curr.irsClassification?.deductibility;
      charity.ein = curr.organization?.ein;

      acc.push(charity);
      return acc;
    }, []);
    return next();
  },
};

module.exports = mainController;
