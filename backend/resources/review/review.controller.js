const { Review, ReviewItem } = require('./review.model')

const all = async (req, res) => {
  try {
    const reviews = Review.find({}).exec
    res.send({
      reviews
    })
  } catch (err) {
    res.status(500).send()
  }
}

module.exports = {
  all
}