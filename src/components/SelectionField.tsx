import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';



export default function SelectionField({listOfSelection,idX,handleChange,title=""}:any) {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch'},
      }}
      noValidate
      autoComplete="off"
      
    >
      <div>
        <TextField

          id="outlined-select-currency"
          select
          label="Select"
          defaultValue={listOfSelection[0]}
          // variant="filled"
          sx={{color:"black"}}

        //   onChange={()=>handleChange(idX,'secondaryText')}
        >
          {listOfSelection.map((option:any,indexNum:number) => (
            <MenuItem key={indexNum} value={option.value} sx={{bgcolor:"#EBEEF6",color:"black"}}
            onClick={()=>handleChange(idX,"secondaryText",option.value,title)} >
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        
      </div>
    </Box>
  );
}