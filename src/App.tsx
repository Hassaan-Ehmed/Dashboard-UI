import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { CssBaseline, Grid, ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar';
import Greet from './components/Greet';
import ActionBtn from './components/ActionBtn';
import CoverSection from './components/CoverSection';
import Form from './components/Form';
import Sidebar from './components/Sidebar';
import { useThemeContext } from './theme/ThemeContextProvider';
import { Provider } from 'react-redux';
import { store, useAppDispatch } from './redux/store';
import { getDataFromLocalStorage, saveDataToLocalStorgae } from './utils/LocalStorage';
import { setDataToStore } from './redux/slices/dashboard';
import { listing } from './data/data';



function App() {

  const { theme } = useThemeContext();
  const dispatch  = useAppDispatch();

  return (
  //  <Grid container sx={{width:"100%",height:"100vh"}}>
  //  </Grid>
  <ThemeProvider theme={theme}>



<CssBaseline/>
<Grid container>

<Grid item xl={2} lg={2} md={2} sm={2} xs={2}>
<Sidebar/>
</Grid>
<Grid item xl={10} lg={10} md={10} sm={9} xs={9}>

 <Navbar/>
  <Greet/>
  <ActionBtn/>
  <CoverSection/>
  <Form/>
</Grid>
  
</Grid>

{/* <SelectTextFields/> */}
  </ThemeProvider>
  )
}

export default App;
