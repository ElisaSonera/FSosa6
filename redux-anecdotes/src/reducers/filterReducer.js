const filterReducer = (state = 'ALL', action) => {
  switch (action.type) {
    case 'SET_FILTER':
      return action.payload
    default:
      return state
  }
}

export const filterChange = (filter) => {
  return {
    type: 'SET_FILTER',
    payload: filter
  }
}

export default filterReducer

// const filterSlice = createSlice({
//   reducers: {
//     filterReducer(state, action) {
//       switch (action.type) {
//         case 'SET_FILTER':
//           return action.payload
//         default:
//           return state
//       }
//     },
//     filterChange(state, action){
//       return {
//         type: 'SET_FILTER',
//         payload: filter
//       }
//     }
//   }
// })
