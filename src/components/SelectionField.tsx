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
          id="filled-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          variant="filled"
          sx={{bgcolor:"#EBEEF6",color:"black"}}

        //   onChange={()=>handleChange(idX,'secondaryText')}
        >
          {listOfSelection.map((option:any) => (
            <MenuItem key={option.value} value={option.value} sx={{bgcolor:"#EBEEF6",color:"black"}}
            onClick={()=>handleChange(idX,"secondaryText",option.value,title)} >
              {option.value}
            </MenuItem>
          ))}
        </TextField>
        
      </div>
    </Box>
  );
}