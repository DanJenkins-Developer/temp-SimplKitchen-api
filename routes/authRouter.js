// Route

const express = require('express')
const { register, login } = require('../controllers/auth')
const router = express.Router()
// controllers here
router.post('/register', register)
router.post('/login', login)

module.exports = router