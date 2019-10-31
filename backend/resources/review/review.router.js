const { Router } = require('express')

const router = Router()

router.route('/')
    .get() // for the get all reviews
    .post() // for the create a new review


router.route('/:id')
    .get() // for the get single review and detail
    .put() // update the specific review
    .delete() // delete the review

module.exports = router