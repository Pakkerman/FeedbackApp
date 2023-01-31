import { createContext, useEffect, useState } from 'react'

const FeedbackContext = createContext()

// create context

// provider that will wrap the children components inside?
// and provide contexts? what?

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {}, // put the old stuff in side
    edit: false,
  })

  // Populate data
  useEffect(() => {
    fetchFeedback()
  }, [])

  // Fetch feedback from server
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`)
    const data = await response.json()
    setFeedback(data)
    setIsLoading(false)
  }

  // Add feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })

    const data = await response.json()

    setFeedback([data, ...feedback])
  }

  // Update feedback item
  const updateFeedback = async (id, updatedItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedItem),
    })
    console.log(JSON.stringify(updatedItem))
    const data = await response.json()

    console.log(data)

    setFeedback(
      feedback.map((item) => {
        console.log('spread->', { ...item, ...data })
        console.log('NO spread->', { item, data })
        return item.id === id ? { ...item, ...data } : item
      })
    )
  }

  // Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('are you sure?')) {
      fetch(`/feedback/${id}`, {
        method: 'DELETE',
      })
    }
    fetchFeedback()
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
        isLoading,
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
