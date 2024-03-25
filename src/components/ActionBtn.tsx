import { Button } from '@mui/material'
import React from 'react'

function ActionBtn() {
  return (

    
   <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
    
    <div style={{width:"100%",height:"10vh",marginTop:"10px",display:"flex",justifyContent:"flex-end",alignItems:"center"}} >
      


<div style={{width:"20%", height:"100%",display:"flex", justifyContent:"center",alignItems:"center",marginRight:"20px",gap:"2vw"}}>

<Button variant="contained" color="success" sx={{width:"40%",bgcolor:"#A61B30",":hover ":{
    bgcolor:"#A61B30"
}}}>
        Save
      </Button>
      <Button variant="outlined" color="error" sx={{width:"40%",bgcolor:"white"}}>
        Cancel
      </Button>
</div>
      
    </div>
  
    </div>
  
  )
}

export default ActionBtn
