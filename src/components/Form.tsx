import React, { useReducer, useState } from 'react'
import buildingImg from '../images/buildings.jpg'
import profileImg from '../images/profile-picture.jpg'
import { Button, Grid, ListItem, ListItemText, TextField } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { listing } from '../data/data';
import { useThemeContext } from '../theme/ThemeContextProvider';
import { useAppSelector } from '../redux/hooks';
import { store } from '../redux/store';
import { setDataToStore } from '../redux/slices/dashboard';

function Form() {

  const { mode, toggleColorMode } = useThemeContext();
  const storeState = useAppSelector(state =>state.dashboard);
  
// const [state,setState]  = useReducer((state:any,newState:any)=>{
// return {...state,newState}
// },

// {
//   email2:""

// }

// )

const [data, setData] = useState(storeState.data);

const handleChange = (index:number, key:any, value:any) => {
  
  setData((prevData:any) => {
    const newData:any = [...prevData]; // Create a shallow copy of the array
    newData[index] = { ...newData[index], [key]: value }; // Update the specific object immutably
    return newData;
  });

  setDataToStore(data as any ?? []);

};



const handleInputs=(event:any,fieldName:any)=>{
  
  console.log("fieldName",fieldName);
  console.log("value",event.target.value);
  
}

console.log('Updated Data:', data);
    const ListItems=(title:string,subText:string,idX:number)=>{
        return (
        
        <ListItem sx={{width:"100%",height:"auto",marginTop:`${'5px'}`}}>
            <ListItemText primary={<p style={{fontWeight:"600",marginLeft:"10px"}}>{title}</p>} secondary={
storeState.isEditable ? 
        (title && <TextField
          id="outlined-size-small"
          defaultValue={subText}
          size="small"

          onChange={e => handleChange(idX, 'secondaryText', e.target.value)}
        />)
        :
        (
          <p style={{fontSize:"1vw",color:"lightgray",marginLeft:"10px"}}>{subText}</p>
        )
        
        } />
          </ListItem>  
        )
    }
  return (

   <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
    
    <Grid container  sx={{ backgroundColor:"purple",width:"98%",height:"100vh",marginTop:"10px"}} >
    {/* {start:0,end:7},{start:7,end:13},{start:13,end:19} */}
{[{start:0,end:7},{start:7,end:13},{start:13,end:19}].map((number:any)=>(      
      <Grid item sx={{bgcolor:(mode === 'dark' ? "#303134" : "white"),height:"100%",position:"relative"}} xl={4} lg={4} md={6} sm={12} xs={12}  >
          <h2 style={{ position:"absolute",top:-20,left:20,color:"#4B7BFE"}}>Contributer</h2>

{storeState?.data?.map((list:any,index:number)=>{
    
    if(index > (number.start) && index < (number.end) ){
        
        return  ListItems(list?.primaryText,list?.secondaryText,index)
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
