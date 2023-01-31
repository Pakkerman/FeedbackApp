import { useContext } from 'react'

import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext)
  // Calculate Avg Rating

  const ratingSum = feedback.reduce((prev, curr) => prev + +curr.rating, 0)
  let ratingAvg = ratingSum / feedback.length
  ratingAvg = ratingAvg.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(ratingAvg) ? 0 : ratingAvg}</h4>
    </div>
  )
}

export default FeedbackStats
