const mongoose = require('mongoose')

const schema1 = new mongoose.Schema({
  name: {
    type: String
  },
  cat: {
    type: String
  },
  price:{
    type:Number
  },
  src:{
    type:String
  }
})

const schema2 = new mongoose.Schema({
  otp:{
    type: Number
  },
  list: [[String, Number, String, String, String]],
  
})

const Schema1Model = mongoose.model('schema1', schema1)
const Schema2Model = mongoose.model('schema2', schema2)

module.exports = { Schema1Model, Schema2Model }
