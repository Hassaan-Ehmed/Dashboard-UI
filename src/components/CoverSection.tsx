import React from 'react'
import buildingImg from '../images/buildings.jpg'
import profileImg from '../images/profile-picture.jpg'
import { Button } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useThemeContext } from '../theme/ThemeContextProvider';
function CoverSection() {

  const { mode, toggleColorMode } = useThemeContext();

  return (

   <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
    
    <div style={{width:"98%",height:"50vh",marginTop:"10px",boxShadow:"0px 3px 20px -11px",display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",backgroundColor:(mode === 'dark' ? "#303134"  : "white"),paddingTop:"30px"}} >
      

<div style={{width:"97%",backgroundColor:"black", height:"60%",display:"flex", flexDirection:"column",justifyContent:"center",gap:"10px"}}>

<img src={buildingImg} alt="" style={{objectFit:"cover",width:"100%",height:"100%",opacity:0.7}}/>
</div>

<div style={{width:"97%", height:"40%",display:"flex", flexDirection:"column",justifyContent:"center",gap:"10px",position:"relative"}}>

<div style={{height:"14vh",width:"14vh",borderRadius:"50%",position:"absolute",top:-30,left:10,boxSizing:"border-box"}}> 
<img src={profileImg} alt="" style={{ border:"4px solid lightgrey",width:"100%",height:"100%",objectFit:"cover",borderRadius:"50%"}}/>
</div>


<div style={{height:"5vw",width:"10vw",position:"absolute",top:1,left:200,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start"}}> 
<p style={{fontSize:"1.2vw",fontWeight:"600",color:(mode === 'light' ? "#A7172A "  : "white")}}>Test Review 1</p>
<Button variant="contained" color="success"  sx={{marginBottom:"20px",fontWeight:"600",bgcolor:"#C3F2E4",color:"#27bca6",":hover ":{bgcolor:"#C3F2E4",color:"#27bca6"}}}>
        Active
      </Button>
</div>

<Button variant='contained' sx={{bgcolor:"#EBEEF6",position:"absolute",right:0,boxShadow:"none",":hover ":{
    bgcolor:"#EBEEF6",
}}}>
<MoreHorizIcon sx={{color:"#A7172A"}}/> 
</Button>
</div>



    </div>
    
   </div>
  )
}

export default CoverSection
