import { createSlice } from "@reduxjs/toolkit";
import { listing } from "../../../data/data";
import { saveDataToLocalStorgae } from "../../../utils/LocalStorage";


const initialState = {
    isEditable:false,
    data:listing
}

const dashboardSlice = createSlice({


    initialState:initialState,
    name:"dashboard",
    reducers:
    {

        editForm:(state:any)=>{

            state.isEditable = true  
        },

        discardChanges:(state:any)=>{

            state.isEditable = false   
        },

        setDataToStore:(state:any,action:any)=>{

            state.data = action?.payload
        },
        
        saveInformation:(state:any)=>{
         
            saveDataToLocalStorgae("information",state?.data ?? []);
            state.isEditable = false
        }
    }
});


export const {editForm,discardChanges,setDataToStore,saveInformation} = dashboardSlice.actions;
export default dashboardSlice.reducer;