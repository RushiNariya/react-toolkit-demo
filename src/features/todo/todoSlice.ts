import { createSlice, nanoid } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { incrementByAmount } from '../counter/counterSlice';

type statusType = 'pending' | 'completed' | 'deleted'

interface Item {
  id: string;
  text: string;
  status: statusType;
}

const todosSlice = createSlice({
  name: 'todos',
  initialState: [] as Item[],
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Item>) => {
        state.push(action.payload);
      },
      prepare: (text: string) => {
        const id = nanoid();
        return { payload: { id, text, status: 'pending' } as Item };
      },
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementByAmount, (state, action) => {
        console.log(state, action);
      })

      .addMatcher(
        (action) => action.type.endsWith('multiply'),
        (state, action) => {
          console.log(state, action);
        }
      )
      // .addDefaultCase((state, action) => {
      //   console.log(state, action);
      // });
  },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;
