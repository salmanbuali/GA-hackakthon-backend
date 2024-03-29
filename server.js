const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const EventsRouter = require('./routes/Events')
const RidesRouter = require('./routes/Rides')

const PORT = process.env.PORT || 3001

const db = require('./db')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/events', EventsRouter)
app.use('/rides', RidesRouter)

app.use('/', (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
