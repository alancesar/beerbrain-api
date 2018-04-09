const restful = require('node-restful');

const { mongoose } = restful;

const CountrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  abbr: { type: String, required: true },
  ico: { type: String, required: true },
  flag: { type: String, required: true },
});

module.exports = restful.model('country', CountrySchema);
