import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messagesByChat: {},  // { [chatId]: { items: [], status: 'idle', error: null } }
}

export const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        
       //set msgs for a specific chat
       setChatMessages: (state, action) => {
            const {chatId, messages} = action.payload;

            if (!state.messagesByChat[chatId]) {
                    state.messagesByChat[chatId] = {items: [], status: 'idle', error: null }
            }
            state.messagesByChat[chatId].items = messages || [];
            state.messagesByChat[chatId].status = "succeeded";
            state.messagesByChat[chatId].error = null; 
       },

        //add a single  message to a chat
        addMessage: (state, action) => {
            const {chatId, messages} = action.payload;

            if(!state.messagesByChat[chatId]) {
                state.messagesByChat[chatId] = {items: [], status: 'idle', error: null }
            }
            state.messagesByChat[chatId].items.push(messages);
        },

        //set loading status for a chat
        setChatMessagesStatus: (state, action) => {
            const {chatId, status} = action.payload;
            if (!state.messagesByChat[chatId]) {
                state.messagesByChat[chatId] = {items: [], status: "idle", error: null}
            }
            state.messagesByChat[chatId].status = status;
        },

        // set error for a chat
        setChatMessagesError: (state, action) => {
            const {chatId, error} = action.payload;
            if (!state.messagesByChat[chatId]) {
                state.messagesByChat[chatId] = {items: [], status: 'idle', error: null }
            }
            state.messagesByChat[chatId].error = error;
            state.messagesByChat[chatId].status = "failed"
        },

        // clear msgs for a chat | CleanUp
        clearChatMessages: (state, action) => {
            const chatId = action.payload;

            delete state.messagesByChat[chatId];
        }
    }
});

export const { setChatMessages, addMessage, setChatMessagesStatus, setChatMessagesError, clearChatMessages } = messagesSlice.actions;

export default messagesSlice.reducer;