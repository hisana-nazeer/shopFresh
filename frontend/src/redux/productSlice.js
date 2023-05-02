import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";



const initialState ={
    productList: [],
    cartItem :[]
}
export const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        setDataProduct:(state,action)=>{
            console.log(action)
            state.productList = [...action.payload]
        },
        addCartItem :(state, action) =>{
           // const check= state.cartItem.some(el => el._id ===action.payload.id)
         
            const total = action.payload.price
            
            state.cartItem = [...state.cartItem,{...action.payload, qty :1, total : total }]
            toast("item added successfully!")
        },
        deleteCartItem :(state, action) =>{
            console.log(action.payload)
            toast("One item deleted!")
            const index = state.cartItem.findIndex((el) => el._id === action.payload)
            state.cartItem.splice(index,1)
           
            console.log(index)

        },
        increaseQty :(state, action)=>{
            const index = state.cartItem.findIndex((el) => el._id === action.payload)
           let  qty = state.cartItem[index].qty
           let qtyInc = ++qty
            state.cartItem[index].qty =qtyInc
            const price = state.cartItem[index].price
            const total = price* qtyInc
            state.cartItem[index].total = total
        },
        decreaseQty :(state,action)=>{
            const index = state.cartItem.findIndex((el) => el._id === action.payload)
            let  qty = state.cartItem[index].qty
            if(qty>1)
            {
                state.cartItem[index].qty =--qty
            }
            


        }

    }
})

export const {setDataProduct,addCartItem,deleteCartItem,increaseQty, decreaseQty } = productSlice.actions
export default productSlice.reducer