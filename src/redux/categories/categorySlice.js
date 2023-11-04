import { createSlice } from '@reduxjs/toolkit';

const currentPath = window.location.pathname.slice(1).toLowerCase();

let id = 0;

switch (currentPath) {
  case 'all products':
    id = 0;
    break;
  case 'clothing':
    id = 1;
    break;
  case 'leads&harnesses':
    id = 2;
    break;
  case 'toys':
    id = 3;
    break;
  case 'care':
    id = 4;
    break;
  case 'furniture':
    id = 5;
    break;
  case 'collars':
    id = 6;
    break;
  default:
    id = 0;
    break;
}

const initialState = id;

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategoryId: (state, action) => {
      return action.payload;
    },
    clearCategoryId: () => {
      return initialState;
    },
  },
});

export const { setCategoryId, clearCategoryId } = categorySlice.actions;
export const selectCategoryId = (state) => state.category;
export default categorySlice.reducer;
