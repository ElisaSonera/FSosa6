import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer, {
  initializeAnecdotes
} from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer,
    notification: notificationReducer
  }
})

store.dispatch(initializeAnecdotes())

console.log(store.getState())

export default store

//jos ymmärsin tehtävänannon 6.10 oikein niin tämä toiminnallisuus piti vain
//siirtää omaan tiedostoonsa store.js, eli näin?
