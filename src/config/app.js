const express = require('express');
const cors = require('./cors');
const logger = require('./logger');

const app = express();

const port = process.env.PORT || 3003;

app.use(cors);

app.listen(port, () => {
  logger.info(`Server running in ${port}`);
});

module.exports = app;
