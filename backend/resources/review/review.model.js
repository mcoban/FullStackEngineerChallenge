const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  reviewName: {
    type: String,
    required: true
  }
})

const reviewItemSchema = new mongoose({
  review: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'review'
  },
  itemName: {
    type: String,
    required: true
  },
  point: {
    type: Number,
    required: true,
    default: 1  // for the point range (1..5)
  }
})

const reviewAssignmentSchema = new mongoose({
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'employee',
    required: true
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'employee',
    required: true
  },
  done: {
    type: Boolean,
    required: true,
    default: false
  },
  reviewDate: {
    type: Date,
    required: true,
    default: new Date()
  }
})

module.exports = {
  Review: mongoose.model('review', reviewSchema),
  ReviewItem: mongoose.model('reviewItem', reviewItemSchema),
  ReviewAssignment: mongoose.model('reviewAssignment', reviewAssignmentSchema)
}