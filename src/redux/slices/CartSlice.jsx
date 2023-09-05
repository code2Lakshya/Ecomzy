import { createSlice } from "@reduxjs/toolkit";


export const CartSlice=createSlice({
    name: 'cart',
    initialState:[],
    reducers:{
        addItem: (state,action)=>{
            state.push(action.payload);
        },
        removeItem: (state,action)=>{
            return state.filter(elem => elem.id!==action.payload);
        }
    }
});

export const {addItem,removeItem}=CartSlice.actions;
export default CartSlice.reducer;