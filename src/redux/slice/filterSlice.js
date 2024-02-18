// Redux, where all filtering and sorting operations are carried out: 
// search filter, category filter, brand filter, price filter

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filteredProducts :[]
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    FILTER_BY_SEARCH(state,action){
      console.log(action.payload)
    }
  }
});

export const {FILTER_BY_SEARCH} = filterSlice.actions

export const selectFilteredProducts = (state) => (state.filter.filteredProducts)

export default filterSlice.reducer