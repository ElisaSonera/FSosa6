import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

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
  const anecdotes = useSelector((state) => state)

  return (
    <ul>
      {anecdotes.map((anecdote) => (
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
