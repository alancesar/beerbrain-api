const express = require('express');
const beersService = require('../api/beer/beerService');

module.exports = (app) => {
  // API Routes
  const router = express.Router();
  app.use('/api', router);

  // Beers Routes
  beersService.register(router, '/beers');
};
