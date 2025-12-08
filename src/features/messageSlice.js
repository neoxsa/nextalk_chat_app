import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: []
}

export const messagesSlice = createSlice({
    name: "messages",
    initialState: initialState,
    reducers: {
        setMessage: (state, action) => {
            state.messages.push({
                id: action.payload.id,
                timestamp: action.payload.timestamp,
                name: action.payload.name,
                chat: action.payload.chat,
                avatar: action.payload.avatar
            });
        }
    }
});

export const { setMessage } = messagesSlice.actions;

export default messagesSlice.reducer;