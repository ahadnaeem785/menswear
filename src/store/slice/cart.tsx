
import { Cart } from '@/utils/types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: Cart[] = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        //add to cart functionality
        addToCart(state, action) {
            let uuid = Math.floor(1000 + Math.random() * 9000);
            let newObj = { ...action.payload, uuid }
            state.push(newObj)
        },
        //delete from cart
        delItem(state, action) {
           return state.filter((val)=> val.uuid !== action.payload)
        },
        //addition of cart item
        addcart(state,action){
            let obj=state.find((val)=>
            val.id == action.payload.id &&
            val.size == action.payload.size );
            if(obj){
              ++obj.qty;
              let newState = state.filter((val)=>val.id !== obj?.id)
              state = [...newState,obj]
              return;
            }
          },
          //subtraction of cart item
          subCart(state,{payload}){
            let obj=state.find((val)=>
            val.id == payload.id &&
            val.size == payload.size );
            if(obj !== undefined){
                if(obj.qty <= 1){
                    return state.filter((val)=>val.uuid !== obj?.uuid)
                }
                --obj.qty;
                let new_state = state.filter((val)=>val.uuid == obj?.uuid);
                state = [...new_state,obj]
                return;
            }
          }
    },
})
export const { addToCart,delItem ,addcart,subCart} = cartSlice.actions

export default cartSlice.reducer