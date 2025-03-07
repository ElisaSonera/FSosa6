//6.12
//createSlice
//riittää että sovellus toimii ja näyttää
// notificationReducerin alkuarvoksi asettaman viestin.

// 6.13
// näyttää Notification-komponentin avulla viiden sekunnin ajan, kun
// sovelluksessa äänestetään tai luodaan uusia anekdootteja
// Notifikaation asettamista ja poistamista varten kannattaa toteuttaa action creatorit.

import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: "",
  reducers: {
    changeNotification(state, action) {
      return action.payload
    }
  }
})

export const { changeNotification } = notificationSlice.actions
export default notificationSlice.reducer
