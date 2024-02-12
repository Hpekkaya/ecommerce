// product ların yönetildiği redux. Burada home da sergilenecek productların kayıtlarıyla alakalı işlemler yürütülecek
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: []
}

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    STORE_PRODUCTS(state,action) {
      // console.log(action.payload)
      state.products = action.payload.products
    }
  }
});

// To get from other sections
export const {STORE_PRODUCTS} = productSlice.actions


export const selectProducts = (state) => state.product.products

export default productSlice.reducer