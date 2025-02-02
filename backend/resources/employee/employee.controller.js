const { Employee } = require('./employee.model')
const { protect } = require('../../utils/auth')

const me = (req, res) => {
  res.json({
    data: req.user
  })
}

const updateMe = async (req, res) => {
  try {
    const user = await Employee.findByIdAndUpdate(req.user._id, req.body, {
      new: true
    })
      .lean()
      .exec()
    res.json({
      data: user
    })
  } catch (err) {
    console.log(err)
    res.status(400).end()
  }
}

const getOne = (req, res) => {
  let id = req.params.id
  console.log('ok')
  res.json(id)
}

const getAll = async (req, res) => {
  try {
    const users = await Employee.find({}).exec()
    res.json({
      users: users
    })
  } catch (err) {
    console.log(err)
    res.status(400).end()
  }
}

module.exports = {
  me,
  updateMe,
  getOne,
  getAll
}