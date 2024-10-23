import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Box} from '@mui/material';

import Home from './pages/home';
import Exercise_detail from './pages/exercise_detail';
import Navbar from './components/navbar';
import Footer from './components/footer';

import './app.css';


const App = () => {
  return (
    <Box width ="400px" sx={{width: {xl:'1488px'}}}m ='auto'>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<Exercise_detail />} />

    </Routes>
    <Footer/>
    </Box>
      
  )
}

export default App
