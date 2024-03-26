import { Button } from '@mui/material'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { discardChanges, editForm, saveInformation } from '../redux/slices/dashboard';

function ActionBtn() {
  
  
  const storeState = useAppSelector(state => state.dashboard);
  const dispatch = useAppDispatch();


  // console.log("storeState",storeState);

  return (  
   <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
    
    <div style={{width:"100%",height:"10vh",marginTop:"10px",display:"flex",justifyContent:"flex-end",alignItems:"center"}} >
      


<div style={{width:"20%", height:"100%",display:"flex", justifyContent:"center",alignItems:"center",marginRight:"20px",gap:"2vw"}}>


{storeState.isEditable  ? (
<>
      <Button variant="contained" color="success" sx={{color:"white",width:"40%",bgcolor:"#A61B30",":hover ":{
       bgcolor:"#A61B30"
        }}}
        onClick={e=> dispatch(saveInformation())}
        >
        Save
      </Button>
      <Button variant="outlined" color="error" sx={{width:"40%",bgcolor:"white"}}
      onClick={ e =>dispatch(discardChanges())}
      >
        Cancel
      </Button>

  </>

) : (

  <Button variant="contained" color="success" sx={{width:"27%",fontWeight:"bold",bgcolor:"#A61B30", display:"flex",justifyContent:"center",gap:"1vw",alignItems:"center",color:"white",":hover ":{
    bgcolor:"#A61B30"
}}}


onClick={e => dispatch(editForm())}
>
        Edit<EditIcon/>
      </Button>

)}
</div>
      
    </div>
  
    </div>
  
  )
}

export default ActionBtn
