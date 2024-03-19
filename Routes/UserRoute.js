const express = require('express')
const UserController = require('../Controllers/UserController')

const route = new express.Router()

route.get('/',UserController.showStatus)
module.exports = route