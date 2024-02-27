const { Schema } = require('mongoose')

const eventSchema = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String },
    date_time: { type: String },
    age_group: { type: Number },
    pic: { type: String }
  },
  { timestamps: true }
)

module.exports = eventSchema