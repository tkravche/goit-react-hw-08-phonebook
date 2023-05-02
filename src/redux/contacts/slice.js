import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  fetchContactsThunk,
  removeContactThunk,
} from './operations';

const initialState = {
  contacts: [],
  filter: '',
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder

      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.contacts = action.payload;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })

      .addCase(removeContactThunk.fulfilled, (state, action) => {
        const item = state.contacts.findIndex(
          item => item.id === action.payload
        );
        state.contacts.splice(item, 1);
      })

      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        (state, action) => {
          state.loading = false;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/pending'),
        (state, action) => {
          state.loading = true;
          state.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.loading = false;
          state.error = action.payload;
        }
      );
  },
});
export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
