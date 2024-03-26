import React from 'react'
import { useThemeContext } from '../theme/ThemeContextProvider';

function Greet() {
  const { mode, toggleColorMode } = useThemeContext();
  
  return (
   <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>

<div style={{width:"98%",height:"10vh",marginTop:"10px",boxShadow:"0px 3px 20px -11px",display:"flex",justifyContent:"space-between",alignItems:"center",backgroundColor:(mode === 'dark' ? "#303134"  : "white")}} >
      

      <div style={{width:"10%", height:"100%",display:"flex", flexDirection:"column",justifyContent:"center",gap:"10px",marginLeft:"20px"}}>
      <p style={{fontSize:"1.4vw",fontWeight:"600",color:(mode === 'light' ? "#A7172A"  : "white")}}>Welcome!</p>
      {/* <p style={{fontSize:"0.7vw",color:"lightgrey"}}>Contributer: Test Reviewer 1</p> */}
      </div>
      
      <div style={{width:"7%", height:"fit-content",textAlign:"center",marginRight:"20px",}}>
      <p style={{fontSize:"1vw",color:"lightgrey"}}>Back / Profile</p>
      </div>
            
          </div>
   </div>
  )
}

export default Greet
