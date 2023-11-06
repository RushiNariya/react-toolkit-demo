/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';
interface userType {
  id: string;
  name: string;
  email: string;
  gender: string;
  status: 'active' | 'inactive';
}
export const fetchUsers = createAsyncThunk(
  'users/update',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://gorest.co.in/public/v2/users', {
        headers: {
          Authorization:
            'Bearer fdf984a88657101be337c5126c0be0a1d238cb5ccc72a44eaf9376debcfa0b24',
        },
      });
      return response.data as userType[];
    } catch (err: any) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return rejectWithValue(err.response.data);
    }
  }
);

export const addUser = createAsyncThunk(
  'users/add',
  async ({ name, email }: any, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        'https://gorest.co.in/public/v2/users',
        {
          id: nanoid(),
          name: name,
          email: email,
          gender: 'male',
          status: 'active',
        },
        {
          headers: {
            Authorization:
              'Bearer fdf984a88657101be337c5126c0be0a1d238cb5ccc72a44eaf9376debcfa0b24',
          },
        }
      );
      return response.data;
    } catch (err: any) {
      return rejectWithValue(err.response.data);
    }
  }
);

interface initialStateType {
  users: userType[];
  loading: boolean;
  error: string | null;
}

const initialState: initialStateType = {
  users: [],
  loading: false,
  error: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.users = [...payload];
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'error ocurred.';
      })
      .addCase(addUser.fulfilled, (state, action) => {
        // state.loading = false;
        console.log('fulfilled');
        // state.error = action.error.message || 'error ocurred.';
        // console.log(action.payload);s
        state.users = [action.payload, ...state.users];
      });
  },
});

// export const {} = usersSlice.actions;
export default usersSlice.reducer;
