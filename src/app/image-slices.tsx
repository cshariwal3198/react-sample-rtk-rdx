import { createSlice } from "@reduxjs/toolkit";

const initialState: string[] = [];

const imageSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        addImage(store, action) {
            store.push(action.payload)
        },
        deleteImage(store, action) {
            return store.filter((image) => (image.toString() !== String(action.payload)))
        },
        deleteAllImages(store) {
            store.splice(0);
        }
    }
});

export const { reducer: imageReducer } = imageSlice;
export const { addImage, deleteAllImages, deleteImage } = imageSlice.actions;