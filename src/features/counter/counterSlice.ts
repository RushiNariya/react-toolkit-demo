import { createAction, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const incrementBy = createAction<number>('incrementBy');
const decrementBy = createAction<number>('decrementBy');

const counterSlice = createSlice({
  name: 'counter',
  initialState: 0 as number,
  reducers: {
    increment: (state) => {
      return state + 1;
    },
    decrement: (state) => state - 1,
    incrementByAmount(state, action: PayloadAction<number>) {
      return state + action.payload;
    },
    multiply: {
      reducer: (state, action: PayloadAction<number>) => state * action.payload,
      prepare: (value?: number) => ({ payload: value || 2 }), // fallback if the payload is a falsy value
    },
  },
  extraReducers: (builder) => {
    builder.addCase(incrementBy, (state, action) => {
      return state + action.payload;
    });
    builder.addCase(decrementBy, (state, action) => {
      return state - action.payload;
    });
  },
});

export const { increment, decrement, incrementByAmount, multiply } =
  counterSlice.actions;
export default counterSlice.reducer;
