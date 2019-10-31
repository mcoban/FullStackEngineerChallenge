const express = require('express')
const { json, urlencoded } = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { signUp, signIn } = require('./utils/auth')
// Router Defines
//const adminRouter = require('./resources/admin/admin.router')
const employeeRoutuer = require('./resources/employee/employee.router')
//const reviewRouter = require('./resources/review/review.router')

const app = express()
app.disable('x-powered-by')

// Middlewares
app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use('/signup', signUp)
app.use('/signin', signIn)
app.use('/employee', employeeRoutuer)
//app.use('/review', reviewRouter)

app.get('/', (req, res) => {
  res.json({
    message: 'hello'
  })
})

const start = () => {
  app.listen(3000, () => {
    console.log('API Server is running on port 3000.')
  })
}

module.exports.start = start