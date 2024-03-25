import React from 'react'
import buildingImg from '../images/buildings.jpg'
import profileImg from '../images/profile-picture.jpg'
import { Button, Grid, ListItem, ListItemText } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { listing } from '../data/data';

function Form() {


    const ListItems=(title:string,subText:string,idX:number)=>{
        return (
            <ListItem sx={{width:"100%",height:"auto",marginTop:`${'-30px'}`}}>
            <ListItemText primary={<p style={{fontWeight:"600",marginLeft:"10px"}}>{title}</p>} secondary={<p style={{fontSize:"1vw",color:"lightgray",marginLeft:"10px"}}>{subText}</p>} />
          </ListItem>  
        )
    }

  return (

   <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
    
    <Grid container  sx={{ backgroundColor:"purple",width:"98%",height:"90vh",marginTop:"10px"}} >
    {/* {start:0,end:7},{start:7,end:13},{start:13,end:19} */}
{[{start:0,end:7},{start:7,end:13},{start:13,end:19}].map((number:any)=>(      
      <Grid item sx={{bgcolor:"white",height:"100%",position:"relative"}} xl={4} lg={4} md={6} sm={12} xs={12}  >
          {/* <h2 style={{ position:"absolute",top:-20,left:20,color:"#4B7BFE"}}>Contributer</h2> */}

{listing.map((list:any,index:number)=>{
    
    if(index > (number.start) && index < (number.end) ){
        
        return  ListItems(list.primaryText,list.secondaryText,index)
 }
})}
     
{/* <div style={{width:"100%",backgroundColor:"green",height:"auto"}}>

</div>
<p style={{fontSize:"1vw",fontWeight:"600",color:"lightgray",marginLeft:"10px"}}>sub-text</p> */}


      </Grid>
))}


    </Grid>
    
   </div>
  )
}

export default Form
