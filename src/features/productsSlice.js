import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const api = 'https://fakestoreapi.com/products';

const initialState = {
    products:[],
}
// This is where async logic goes
export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async()=>{
        const response = await axios.get(api);
        const data = await response.data;
        return data;
    }
)
export const productSlice = createSlice({
    name:'products',
    initialState,
// The reducers field lets us define reducers and genrate associated actions
// This is where direct logic goes.

reducers:{},

// internal changing of the state, not from api
// reducers:{
//     addCase(fetchProducts.fulfilled,(state,action)=>{     
//     state.products=action.payload;}
// The extraReducers field lets the slice handle actions defined elsewhere,
// including actions generated by createAsyncThunk or in other slices.

// This is where async logic goes

extraReducers:(builder)=>{
    // this is now the current state , state might contain whatever the changes is done
    // we are taking the current state and changing the state whatever comes back from payload
    builder
    .addCase(fetchProducts.fulfilled,(state,action)=>{     
        state.products=action.payload;
    }).addCase(fetchProducts.rejected,(state,action)=>{
        state.products=[];
    })
}
})

export default productSlice.reducer;