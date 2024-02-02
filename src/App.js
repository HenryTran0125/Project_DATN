import React from 'react';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

const App = () => {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Project_DATN/home' element={<Home />} />
      <Route path='/Project_DATN/login' element={<Login />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
        //{[...Array(numberOfSnowflakes)].map((_, index) => (<Snowflake key={index} />))}
