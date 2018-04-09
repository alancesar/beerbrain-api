const restful = require('node-restful');

const { mongoose } = restful;

const PriceSchema = new mongoose.Schema({
  value: { type: Number, require: true },
  expiresAt: { type: String, default: null },
  promotional: { type: Boolean, default: false },
});

const BeerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  volume: { type: String, required: true },
  image: { type: String, required: true },
  ibu: { type: Number, required: true },
  country: { type: String, required: true },
  abv: { type: Number, required: true },
  style: { type: String, required: true },
  prices: { type: [PriceSchema], required: true },
  description: { type: String, required: true },
});

module.exports = restful.model('beer', BeerSchema);
