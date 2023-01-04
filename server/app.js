const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config({path : './config.env'})

const app = express();

const PORT = process.env.PORT

const expressServer = app.listen(PORT, () => {
    console.log("Server running on port : " + PORT);
})

app.get('/', (req, res) => {
    res.status(200).json({msg : "Server successfully running"})
})