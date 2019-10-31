const { Router } = require('express')
const { me } = require('./employee.controller')

const router = Router()

router.get('/me', me)


module.exports = router