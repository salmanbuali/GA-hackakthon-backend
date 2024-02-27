const mongoose = require('mongoose')
const rideSchema = require('./Ride')
const eventSchema = require('./Event')

const Ride = mongoose.model('Ride', rideSchema)
const Event = mongoose.model('Event', eventSchema)

module.exports = {
  Ride,
  Event
}
