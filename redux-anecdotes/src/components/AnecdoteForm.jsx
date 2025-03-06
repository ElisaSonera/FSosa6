import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()
  
    const addAnecdote = (event) => {
      event.preventDefault()
      const content = event.target.anecdote.value
      const votes = event.target.anecdote.votes
      event.target.anecdote.value = ''
      event.target.anecdote.votes = 0
      dispatch(createAnecdote(content, votes))
    }
  
    return (
      <form onSubmit={addAnecdote}>
        <h2>create new</h2>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    )
  }
  
  export default AnecdoteForm