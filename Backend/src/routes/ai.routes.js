const express = require('express')
const aiController = require('../controllers/ai.controller')


const router = express.Router();

//router.get('/get_response' , aiController.getResponse)
router.post('/get_review', aiController.getReview)

module.exports = router