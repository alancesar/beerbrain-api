const restful = require('node-restful');

const { mongoose } = restful;

const BeerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  volume: { type: String, required: true },
  image: { type: String, required: true },
  ibu: { type: Number, required: true },
  country: { type: String, required: true },
  abv: { type: Number, required: true },
  style: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

module.exports = restful.model('beer', BeerSchema);
