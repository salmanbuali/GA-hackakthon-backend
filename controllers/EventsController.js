const { Event } = require('../models')

const GetEvents = async (req, res) => {
  try {
    const events = await Event.find({})
    res.json(events)
  } catch (error) {
    throw error
  }
}

const CreateEvent = async (req, res) => {
  try {
    const event = await Event.create({ ...req.body })
    res.json(event)
  } catch (error) {
    throw error
  }
}

const DeleteEvent = async (req, res) => {
  try {
    await Event.deleteOne({ _id: req.params.event_id })
    res.send({ msg: 'event Deleted', payload: req.params.event_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetEvents,
  CreateEvent,
  DeleteEvent
}
