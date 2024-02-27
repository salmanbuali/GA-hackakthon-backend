const { Ride } = require('../models')

const GetRides = async (req, res) => {
  try {
    const rides = await Ride.find({})
    res.json(rides)
  } catch (error) {
    throw error
  }
}

const CreateRide = async (req, res) => {
  try {
    const ride = await Ride.create({ ...req.body })
    res.send(ride)
  } catch (error) {
    throw error
  }
}


const DeleteRide = async (req, res) => {
  try {
    await Ride.deleteOne({ _id: req.params.ride_id })
    res.send({ msg: 'Ride Deleted', payload: req.params.ride_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetRides,
  CreateRide,
  DeleteRide
}
