// pantry routes
const express = require('express')
const router = express.Router()

const getAllIngredients = require('../controllers/pantry')

router.get('/ingredients', getAllIngredients)

module.exports = router