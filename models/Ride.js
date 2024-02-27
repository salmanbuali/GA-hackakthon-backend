const { Schema } = require('mongoose')

const rideSchema = new Schema(
  {
    name: { type: String, required: true },
    desc: { type: String },
    min_height: { type: String },
    price: { type: Number },
    capacity: { type: Number },
    pic: { type: String }
  },
  { timestamps: true }
)

module.exports = rideSchema
