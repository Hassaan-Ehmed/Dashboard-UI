import React, { useReducer, useState } from 'react'
import buildingImg from '../images/buildings.jpg'
import profileImg from '../images/profile-picture.jpg'
import { Button, Grid, ListItem, ListItemText, TextField } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { cities, countries, genders, listing } from '../data/data';
import { useThemeContext } from '../theme/ThemeContextProvider';
import { useAppSelector } from '../redux/hooks';
import { store, useAppDispatch } from '../redux/store';
import {  setDataToStore } from '../redux/slices/dashboard';
import { getDataFromLocalStorage, saveDataToLocalStorgae } from '../utils/LocalStorage';
import SelectionField from './SelectionField';

function Form() {

  const { mode, toggleColorMode } = useThemeContext();
  const storeState = useAppSelector(state =>state.dashboard);
  const dispatch  = useAppDispatch();

const [data, setData] = useState(storeState.inputFieldsData);
const [countryCity, setCountryCity] = useState(cities.Pakistan);
const [date,setDate] = useState(`${new Date().getMonth()+1}-${new Date().getDate()}-${new Date().getFullYear()}`);

React.useEffect(()=>{

  dispatch(setDataToStore(data));
  
  console.log("Inside Form's useEffect!");
  
  
},[data])


React.useEffect(()=>{

  const dataPacket:any = getDataFromLocalStorage("information");
  
  if(dataPacket === null){
    saveDataToLocalStorgae("information",listing);
  }else{

    setData(dataPacket);
  }
    },[]);


const handleChange = (index:number, key:any, value:any,title="") => {

  
  if( title === "Country"){

let copy_cities:any =  {...cities};

setCountryCity(copy_cities[value]);   


}
  setData((prevData:any) => {
    const newData:any = [...prevData]; // Create a shallow copy of the array
    newData[index] = { ...newData[index], [key]: value }; // Update the specific object immutably
    return newData;
  });  

};

// console.log('Updated Data:', data);

const DateField=(idX:any)=>{
  
  return (<>
  
               
                <input
                  type="date"
                  // max={state?.dateTo}
                  value={date}
                  // min={`${new Date().getFullYear()}-0${new Date().getMonth()+1}-${new Date().getDate()}`}
                  style={{
                    width: "48%",
                    height: "50%",
                    padding:".7vw 0",
                    backgroundColor:`${mode === "dark" && "transparent" }`,
                    color:`${mode === "dark" && "white" }`,
                    cursor: "pointer",
                    borderRadius: "5px",
                    position:"relative",
                    border: "1px solid #bcbaba",
                  }}
                  
                  onChange={ (e:any)=> {handleChange(idX, 'secondaryText', e.target.value);setDate(e.target.value)}}
                  
                  />
  </>)
}

const ListItems=(title:string,subText:string,idX:number,)=>{
  
  return (

    <ListItem sx={{width:"100%",height:"auto",marginTop:`${'5px'}`}}>
            <ListItemText primary={<p style={{fontWeight:"600",marginLeft:"10px"}}>{title}</p>} secondary={
              storeState.isEditable ? 
              (title === "Gender" ? <SelectionField listOfSelection={genders} idX={idX} handleChange={handleChange}/> : title === "Country" ? <SelectionField listOfSelection={countries} idX={idX} handleChange={handleChange} title={title} /> : title === "City" ? <SelectionField listOfSelection={countryCity} idX={idX} handleChange={handleChange}/> : title === "Date of Birth"  ? <DateField  idX={idX}/> : title !== "" && <TextField
              id="outlined-size-small"
              defaultValue={subText}
              size="small"
              
              onChange={e => handleChange(idX, 'secondaryText', e.target.value)}
              />)
              :
                (
                <p style={{fontSize:"1vw",color:"lightgray",marginLeft:"10px"}}>{title === "Date of Birth"  ? date : subText}</p>
                )
              } />
          </ListItem>  
        )
      }



  return (

   <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
    
    <Grid container  sx={{width:"98%",height:"100vh",marginTop:"10px",borderRadius:"5px"}} >
    {/* {start:0,end:7},{start:7,end:13},{start:13,end:19} */}
{[{start:0,end:7},{start:7,end:13},{start:13,end:19}].map((number:any,index:number)=>(      
      <Grid item sx={{bgcolor:(mode === 'dark' ? "#303134" : "white"),height:"100%",position:"relative",borderRadius:"5px"}} xl={4} lg={4} md={6} sm={12} xs={12}  >
         {index == 0  &&  <h2 style={{ position:"absolute",top:-20,left:20,color:"#4B7BFE"}}>Contributer</h2>}

{data?.map((list:any,index:number)=>{
    
    if( index > (number.start) && index < (number.end) ){
        
    return  ListItems(list?.primaryText,list?.secondaryText,index);


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
