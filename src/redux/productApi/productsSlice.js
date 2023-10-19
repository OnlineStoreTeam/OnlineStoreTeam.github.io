import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSearchCatalog: ( state, action )=>{

            return [...action.payload]
        },
        clearSearchCatalog: ()=>{
            return initialState
        }
    }
})

export const { setSearchCatalog, clearSearchCatalog } = productsSlice.actions;
export const selectSearchCatalog = (state) => state.products;
export default productsSlice.reducer;