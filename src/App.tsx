import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid } from '@mui/material';
import Navbar from './components/Navbar';
import Greet from './components/Greet';
import ActionBtn from './components/ActionBtn';
import CoverSection from './components/CoverSection';
import Form from './components/Form';

function App() {
  return (
  //  <Grid container sx={{width:"100%",height:"100vh"}}>
  //  </Grid>
  <React.Fragment>

  <Navbar/>
  <Greet/>
  <ActionBtn/>
  <CoverSection/>
  <Form/>
  </React.Fragment>
  )
}

export default App;
