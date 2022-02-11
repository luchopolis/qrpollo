const express = require('express')
const app = express()
const morgan = require('morgan')

const codeRoute = require('./routes/code-route')

morgan('dev')
// env
const { PORT } = require('./config')

app.use('/qrcode',codeRoute)


app.listen(PORT, () => {
    console.log(`Running at ${PORT}`);
})


