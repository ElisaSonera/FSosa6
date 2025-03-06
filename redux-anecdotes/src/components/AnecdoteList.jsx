import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { filterChange } from '../reducers/filterReducer'

// eslint-disable-next-line react/prop-types
const Anecdote = ({ content, handleClick, votes }) => {
  return (
    <div>
      {content}
      <div>has {votes} votes <button onClick={handleClick}>vote</button></div>
    </div>
  )
}

const Anecdotes = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter)

  const filterAnecdotes = useSelector(state => {
    if (state.filter === 'ALL') {
      return state.anecdotes
    }
    return state.anecdotes.filter(anecdote =>
      anecdote.content.includes(filter))
  })

  return (
    <ul>
      {filterAnecdotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          content={anecdote.content}
          handleClick={() => dispatch(vote(anecdote.id))}
          votes={anecdote.votes}
        />
      ))}
    </ul>
  )
}

export default Anecdotes
