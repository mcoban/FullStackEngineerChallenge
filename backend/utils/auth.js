const { config } = require('../config')
const { Employee } = require('../resources/employee/employee.model')
const jwt = require('jsonwebtoken')

const newToken = employee => {
  return jwt.sign({ id: employee.id }, config.secrets.jwt, {
    expiresIn: config.secrets.jwtExp
  })
}

const verifyToken = token => {
  new Promise ((resolve, reject) => {
    jwt.verify(token, config.secrets.jwt, (err, payload) => {
      if (err) return reject(err)
      resolve(payload)
    })
  })
}

const signUp = async (req, res) => {
  if (!req.body.email || !req.body.password || !req.body.fullName) {
    return res.status(400).send({ message: 'Please fill the requirements' })
  }

  try {
    const employee = await Employee.create(req.body)
    const token = newToken(employee)
    return res.status(201).send({
      user: employee,
      token: token
    })
  } catch (err) {
    return res.status(500).end()
  }
}

const signIn = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).send({ message: 'Empty email or password' })
  }

  try {
    
    const employee = await Employee.findOne({ email: req.body.email })
      .exec()
    const invalid = { message: 'invalid email or password' }

    if (!employee) {
      return res.status(400).send(invalid)
    }

    const match = await employee.checkPassword(req.body.password)

    if (!match) {
      return res.status(400).send(invalid)
    }

    const token = newToken(employee)
    return res.status(201).send({
      user: employee,
      token: token
    })
  } catch (err) {
    console.log(err)
    res.status(500).end()
  }

}

const protect = async (req, res, next) => {
  let token = req.headers.authorization.split(`Bearer `)[1]
  if (!token) {
    res.status(401).send({ message: 'no auth' })
  }
  try {
    const payload = await verifyToken(token)
    const employee = await Employee.findById(payload.id)
      .select('-password') // ignore password
      .exec()
    req.user = user
    next()
  } catch (err) {
    console.log(err)
    res.send(401).send({ message: 'no auth' })
  }
}


module.exports = {
  signUp, signIn, newToken, verifyToken, protect
}