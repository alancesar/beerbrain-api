const express = require('express');
const beersService = require('../api/beer/beerService');
const countryService = require('../api/country/countryService');

module.exports = (app) => {
  // API Routes
  const router = express.Router();
  app.use('/api', router);

  // Beer Routes
  beersService.register(router, '/beer');
  countryService.register(router, '/countries');
};
