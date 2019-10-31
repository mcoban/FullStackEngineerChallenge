const { Router } = require('express')
const { me, updateMe, getOne } = require('./employee.controller')

const router = Router()

router.route('/')
  .get(me) // get information for the employeeself
  .put(updateMe) // update information for the employee


router.route('/:id')
  .get(getOne) // get the specific epmployee information. This is restricted by admin user
  .put() // update the employee, again only admin can make this request


module.exports = router