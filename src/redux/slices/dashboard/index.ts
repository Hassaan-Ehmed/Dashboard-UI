import { createSlice } from "@reduxjs/toolkit";
import { listing } from "../../../data/data";
import { saveDataToLocalStorgae } from "../../../utils/LocalStorage";


const initialState = {
    isEditable:false,
    inputFieldsData:listing,
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
            
            // alert("Helloooo Setting Data!")
            // console.log("When i typing...",action?.payload);

            state.inputFieldsData = action?.payload
        },
        
        saveInformation:(state:any)=>{

            alert(state.inputFieldsData);
            
            saveDataToLocalStorgae("information",state?.inputFieldsData);
            state.isEditable = false
        },

    
    }
});


export const {editForm,discardChanges,setDataToStore,saveInformation} = dashboardSlice.actions;
export default dashboardSlice.reducer;