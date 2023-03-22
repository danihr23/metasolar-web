import {createSlice} from  '@reduxjs/toolkit'



const wallet = {
    userAddres:'',
}

export const counterSlice=createSlice({
    name:'userWalletAddres',
     initialState:wallet,
    reducers:{
        setUserAddres:(state,actions)=>{
            state.value =actions.payload ;
        },
        
    }
})
export const {setUserAddres}= counterSlice.actions;
export default counterSlice.reducer;