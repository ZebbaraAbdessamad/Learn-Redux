import {createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { openModal } from "./modalSlice";

const url =  'https://course-api.com/react-useReducer-cart-project';


const initialState = {
    cartItems : [],
    amount:2,
    total:0,
    isLoading:true,
};

// /cart/getCartItems => is the action like this action /cart/calculateTotals
// first argument to the createAsyncThunk callback is replaced with _ (an underscore) since we're not using it.
export const getCartItems =createAsyncThunk('/cart/getCartItems', async (_, thunkAPI)=>{
  try{
     // with thunkAPI you have the acess to all state and store and dispatchers ..;
     console.log(thunkAPI.getState());
     // and dispatch action such as :
     //thunkAPI.dispatch(openModal())
     const resp = await axios(url);
     return resp.data;
  }catch(err){
    return thunkAPI.rejectWithValue('something went worng');
  }
})

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        clearCart:(state) => {
            state.cartItems =[]; // or return {  cartItems =[] };
            state.amount=0;
        },
        removeItem:(state , action) =>{
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) =>
            item.id !== itemId
            );
        },
        increase:(state , action) =>{
            const itemId = action.payload;
            const updatedCartItems = state.cartItems.map((item) => {
                if (item.id === itemId) {
                  return {
                    ...item,
                    amount: item.amount + 1,
                  };
                }
                return item;
              });
            
              return {
                ...state,
                cartItems: updatedCartItems,
              };
        },
        decrease:(state , action) =>{
            const itemId = action.payload;
            const updatedCartItems = state.cartItems.map((item) => {
                if (item.id === itemId) {
                  return {
                    ...item,
                    amount: item.amount - 1,
                  };
                }
                return item;
              });
            
              return {
                ...state,
                cartItems: updatedCartItems,
              };
        },
        calculateTotals:(state) =>{
           let amount = 0 ;
           let totalPrice = 0;
           state.cartItems.forEach((item)=>{
            amount+=item.amount;
            totalPrice +=item.amount * item.price;
           });
           state.amount = amount;
           state.total = totalPrice ;
        },
    },
    extraReducers:{
        [getCartItems.pending]:(state)=>{
            state.isLoading=true;
        },
        [getCartItems.fulfilled]:(state ,action)=>{
            console.log(action);
            state.isLoading=false;
            state.cartItems=action.payload;
        },    
        [getCartItems.rejected]:(state ,action)=>{
            console.log(action);
            state.isLoading=false;
        }
    }
});


export const { clearCart , removeItem ,increase ,decrease ,calculateTotals} = cartSlice.actions;
export default cartSlice.reducer;


