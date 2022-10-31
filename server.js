const express = require('express')
const app = express()
const PORT = 8000

require('./config/mongoose.config')

app.use(express.json()), express.urlencoded({extended: true})

const AllMyJokeRoutes = require('./routes/jokes.routes')

AllMyJokeRoutes(app)

app.listen(PORT, () => console.log(`Server spinned up and listening on port: ${PORT}!`))