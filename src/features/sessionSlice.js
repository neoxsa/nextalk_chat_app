import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    session: null
}

export const sessionSlice = createSlice({
    name: "session",
    initialState: initialState,
    reducers: {
        setSession: (state, action) => {
            state.session = action.payload;
        },
        clearSession: (state) => {
            state.session = null;
        }
    }
});

export const { setSession, clearSession } = sessionSlice.actions;

export default sessionSlice.reducer;