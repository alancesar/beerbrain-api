const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/dojo';

module.exports = mongoose.connect(uri);
