const route = require('express').Router()

const { create } = require('../controllers/code')


route.get('/generate', create)

module.exports = route