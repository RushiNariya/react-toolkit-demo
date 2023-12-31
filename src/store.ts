import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './features/todo/todoSlice';
import counterReducer from './features/counter/counterSlice';
import usersReducer from './features/user/userSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    counter: counterReducer,
    user: usersReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
