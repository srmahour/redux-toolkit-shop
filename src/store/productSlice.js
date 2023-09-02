import { createSlice } from "@reduxjs/toolkit";


const STATUSES = Object.freeze({
    IDLE:'idle',
    LOADING:'loading',
    ERROR:'error'
})


export const productSlice = createSlice({

    name:"product",
    initialState:{
        data:[],
        status:STATUSES.LOADING
    },
    reducers:{
        setProducts: (state, action) => {
            state.data = action.payload;
        },
        setStatus:(state, action) => {
            state.status = action.payload;
        }
    }

})

export const {setProducts, setStatus} = productSlice.actions
export default productSlice.reducer

export function fetchProducts(endpoint){
    return async function fetchProductsThunk(dispatch, getState){
        dispatch(setStatus(STATUSES.LOADING));
       
        try{

            const res = await fetch(`https://fakestoreapi.com/${endpoint}`);
            const data = await res.json();

            dispatch(setProducts(data));
            dispatch(setStatus(STATUSES.IDLE));

        } catch(err){

            dispatch(setStatus(STATUSES.ERROR));

        }
    }
}