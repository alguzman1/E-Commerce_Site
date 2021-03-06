const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
  name: {type: String, required: true},
  price: {type: String, required: true},
  image: String,
  category: {type: String, required: true},
  created: {type: Date, required: true}
})

Product.methods.setProductData = function (requestBody) {
  this.name = requestBody.name || this.name
  this.price = requestBody.price || this.price
  this.image = requestBody.image || this.image
  this.category = requestBody.category || this.category
}

Product.methods.setDate = function () {
  const dateNow = new Date()
  this.created = dateNow 
}

module.exports = mongoose.model('Product', Product)
