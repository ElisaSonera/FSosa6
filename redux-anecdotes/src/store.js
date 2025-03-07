import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer, { setAnecdotes } from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'
import anecdoteService from './services/anecdotes'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer,
    notification: notificationReducer
  }
})

anecdoteService.getAll().then((anecdotes) =>
  store.dispatch(setAnecdotes(anecdotes))
)

console.log(store.getState())

export default store

//jos ymmärsin tehtävänannon 6.10 oikein niin tämä toiminnallisuus piti vain
//siirtää omaan tiedostoonsa store.js, eli näin?
