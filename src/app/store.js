import { configureStore } from '@reduxjs/toolkit'
import messagesReducer from '../features/messageSlice'
import sessionReducer from '../features/sessionSlice'

export const store = configureStore({
    reducer: {
        messages: messagesReducer,
        session: sessionReducer,
    }
})

export default store;