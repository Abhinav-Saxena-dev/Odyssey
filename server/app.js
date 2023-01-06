const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connectDB = require('./Database/connect')
const router = require('./routes/user')

dotenv.config({path : './config.env'})

const app = express();

const PORT = process.env.PORT
const URL = process.env.DATABASE

connectDB(URL)

app.use(cors());

app.use(express.json())

app.use(router)

const expressServer = app.listen(PORT, () => {
    console.log("Server running on port : " + PORT);
})

app.get('/', (req, res) => {
    res.status(200).json({msg : "Server successfully running"})
})