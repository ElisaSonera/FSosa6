import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'

const store = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
    filter: filterReducer
  }
})

console.log(store.getState())

export default store


//jos ymmärsin tehtävänannon 6.10 oikein niin tämä toiminnallisuus piti vain
//siirtää omaan tiedostoonsa store.js, eli näin?