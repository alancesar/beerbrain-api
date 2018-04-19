const express = require('express');
const beerService = require('../api/beer/beerService');
const countryService = require('../api/country/countryService');

module.exports = (app) => {
  // API Routes
  const router = express.Router();
  app.use('/api', router);

  // Beer Routes
  beerService.register(router, '/beer');
  countryService.register(router, '/countries');
};
