import { createSlice } from "@reduxjs/toolkit";

const initialState: string[] = [];

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        addNewUser(store, action) {
            store.push(action.payload)
        },
        deleteUser(store, action) {
            return store.filter((name) => (name !== action.payload))
        },
        removeAllUsers(store) {
            store.splice(0)
        }
    }
});

export const { reducer: userReducer } = userSlice;
export const { addNewUser, deleteUser, removeAllUsers } = userSlice.actions;