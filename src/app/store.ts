import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { userReducer } from './user-slices';
import { imageReducer } from './image-slices';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
    images: imageReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
