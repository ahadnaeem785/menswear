import { products } from '@/utils/mock'
import { Product } from '@/utils/types'
import { createSlice } from '@reduxjs/toolkit'

const initialState : Product[] = products

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {

  },
})
export const {  } = productSlice.actions

export default productSlice.reducer