const { Router } = require('express')
const { all } = require('./review.controller')

const router = Router()

router.route('/')
    .get(all) // for the get all reviews


router.route('/:id')
    .get() // for the get single review and detail
    .put() // update the specific review
    .delete() // delete the review

module.exports = router