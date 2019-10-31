const { Router } = require('express')
const { me, updateMe, getOne, getAll } = require('./employee.controller')

const router = Router()

router.route('/')
  .get(me) // get information for the employeeself
  .put(updateMe) // update information for the employee

router.route('/all')
  .get(getAll)

module.exports = router