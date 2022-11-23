const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

app.use(express.static(`${__dirname}/public`))




app.listen(4040, () => console.log("server is running on 4040"))