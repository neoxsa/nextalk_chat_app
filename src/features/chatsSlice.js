import { createSlice } from "@reduxjs/toolkit";


const initialState= {
    chatList: [],          // [{ id, name, created_at }]
    activeChatId: null,
    status: 'idle',        // idle | loading | succeeded | failed
    error: null,
};

export const chatsSlice = createSlice({
    name: "chats",
    initialState,
    reducers: {
        setChats: (state, action) => {
            state.chatList = action.payload || []
            state.status = "succeeded";
            state.error = null;
            },
        setActiveChat: (state, action) => {
          state.activeChatId = action.payload;  
        },
        setChatsStatus: (state, action) => {
            state.status = action.payload;
        },
        setChatsError: (state, action) => {
                state.error = action.payload;
                state.status = "failed";
        },
        addChat: (state, action) => {
            state.chatList.push(action.payload)
        }
    }
});


export const {setChats, setActiveChat, setChatsStatus, setChatsError, addChat} = chatsSlice.actions

export default chatsSlice.reducer;