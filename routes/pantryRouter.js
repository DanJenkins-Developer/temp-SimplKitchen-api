const express = require('express')
const router = express.Router()

const {
    getAllIngredients,
    getIngredient,
    addIngredient,
    updateIngredient,
    deleteIngredient,
} = require("../controllers/pantryController")

router.route('/').post(addIngredient).get(getAllIngredients)
router.route('/:id').get(getIngredient).delete(deleteIngredient).patch(updateIngredient)

module.exports = router
