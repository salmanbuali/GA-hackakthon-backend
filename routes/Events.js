const router = require('express').Router()
const controller = require('../controllers/EventsController')


router.get('/', controller.GetEvents)
router.post('/', controller.CreateEvent)
router.delete('/:event_id', controller.DeleteEvent)

module.exports = router