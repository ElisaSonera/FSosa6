import { filterChange } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'

const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const filterValue = event.target.value
    dispatch(filterChange(filterValue))
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      <form onChange={handleChange}>
        <h2>filter</h2>
        <input name="filter" />
        <button type="submit">filter</button>
      </form>
    </div>
  )
}

export default Filter
