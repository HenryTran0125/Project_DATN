import React from 'react';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import PageNotFound from './components/Pages/PageNotFound/PageNotFound';
import WelcomePage from './components/Pages/WelcomePage/WelcomePage';

const App = () => {

  return (
    <BrowserRouter basename='/Project_DATN'>
    <Routes>
      <Route path='/' element={<WelcomePage />} />
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
        //{[...Array(numberOfSnowflakes)].map((_, index) => (<Snowflake key={index} />))}
