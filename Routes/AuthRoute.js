const express = require('express')
const route = new express.Router()
const AuthController = require('../Controllers/AuthController')

route.post('/register',AuthController.userRegister)
route.post('/login',AuthController.userRegister)

module.exports = route

