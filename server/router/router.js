const express = require('express')
const router = express.Router()
const authentication = require('../middleware/authentication.js')
const controller = require('../controllers/controller.js')

router.post('/login',controller.login)
router.get('/countries',authentication,controller.getCountries)
router.get('/reports',authentication,controller.getReports)
router.post('/reports',authentication,controller.addReports)
router.delete('/reports:id',authentication,controller.delete)


module.exports = router