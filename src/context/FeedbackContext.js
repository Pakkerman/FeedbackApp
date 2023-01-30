import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from 'react'

const FeedbackContext = createContext()

// create context

// provider that will wrap the children components inside?
// and provide contexts? what?

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: 'This is feedback item#1', rating: 10 },
    { id: 2, text: 'This is feedback item#2', rating: 8 },
    { id: 3, text: 'This is feedback item#3', rating: 7 },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {}, // put the old stuff in side
    edit: false,
  })
  // Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  // Update feedback item
  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    )
  }

  // Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('are you sure?')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        updateFeedback,
        addFeedback,
        editFeedback,
        deleteFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
