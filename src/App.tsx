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
import { store } from './redux/store';
import { getDataFromLocalStorage } from './utils/LocalStorage';
import { setDataToStore } from './redux/slices/dashboard';

function App() {

  const { theme } = useThemeContext();

  useEffect(()=>{

const data:any = getDataFromLocalStorage("information");

if(data){
  setDataToStore(data);
}
  },[])

  return (
  //  <Grid container sx={{width:"100%",height:"100vh"}}>
  //  </Grid>
  <ThemeProvider theme={theme}>

<Provider store={store}>

<CssBaseline/>
 <Navbar/>
  <Greet/>
  <ActionBtn/>
  <CoverSection/>
  <Form/>
  

  
</Provider>
  </ThemeProvider>
  )
}

export default App;
