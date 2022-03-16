/* eslint-disable no-param-reassign */
const axios = require('axios');

const mainController = {
  buildQuery(req, res, next) {

    res.locals.query = process.env.APIURL;
    if ('search' in req.body && typeof req.body.search === 'string')
      res.locals.query += `&search=${req.body.search}`;
    if (
      'fundraisingOrgs' in req.body &&
      typeof req.body.fundraisingOrgs === 'boolean'
    )
      res.locals.query += `&fundraisingOrgs=${req.body.fundraisingOrgs}`;
    if ('state' in req.body && req.body.state.length === 2)
      res.locals.query += `&state=${req.body.state.toUpperCase()}`;
    if ('city' in req.body) res.locals.query += `&city=${req.body.city}`;
    if ('zip' in req.body && req.body.zip.length === 5)
      res.locals.query += `&zip=${req.body.zip}`;
    if ('sizeRange' in req.body)
      if (req.body.sizeRange.toLowerCase() === 'small')
        res.locals.query += '&sizeRange=1';
      else if (req.body.sizeRange.toLowerCase() === 'medium')
        res.locals.query += '&sizeRange=2';
      else if (req.body.sizeRange.toLowerCase() === 'large')
        res.locals.query += '&sizeRange=3';
    if (
      'donorPrivacy' in req.body &&
      typeof req.body.donorPrivacy === 'boolean'
    )
      res.locals.query += `&donorPrivacy=${req.body.donorPrivacy}`;
    if ('scopeOfWork' in req.body) {
      const scope = req.body.scopeOfWork;
      if (
        scope === 'ALL' ||
        scope === 'REGIONAL' ||
        scope === 'NATIONAL' ||
        scope === 'INTERNATIONAL'
      )
        res.locals.query += `&scopeOfWork=${scope}`;
    }
    if (
      'noGovSupport' in req.body &&
      typeof req.body.noGovSupport === 'boolean'
    )
      res.locals.query += `&noGovSupport=${req.body.noGovSupport}`;

    next();
  },

  getCharities(req, res, next) {
    console.log(res.locals.query);
    axios.get(res.locals.query)
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
