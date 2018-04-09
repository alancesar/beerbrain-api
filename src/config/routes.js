const express = require('express');
const beersService = require('../api/beer/beerService');
const countryService = require('../api/country/countryService');

module.exports = (app) => {
  // API Routes
  const router = express.Router();
  app.use('/api', router);

  // Beers Routes
  beersService.register(router, '/beers');
  countryService.register(router, '/countries');
};
