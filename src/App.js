import React from 'react';
import Home from './components/Pages/Home/Home';
<<<<<<< HEAD
import Login from './components/Pages/Login/Login'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import PageNotFound from './components/Pages/PageNotFound/PageNotFound';
import WelcomePage from './components/Pages/WelcomePage/WelcomePage';
=======
import Login from './components/Pages/Login/Login';
import PageNotFound from './components/Pages/PageNotFound/PageNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GreetingPage from './components/Pages/GreetingPage/GreetingPage';
>>>>>>> 87d9633905108e5fa350e10510174a1548c8d054

const App = () => {
  return (
<<<<<<< HEAD
    <BrowserRouter basename='/Project_DATN'>
    <Routes>
      <Route path='/' element={<WelcomePage />} />
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
=======
    <BrowserRouter basename='Project_DATN'>
      <Routes>
        {/* Đặt trang Login làm trang mặc định */}
        <Route path="/" element={<GreetingPage />} />

        {/* Cấu hình đường dẫn cụ thể cho trang Home */}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Route này sẽ bắt tất cả các đường dẫn không xác định và hiển thị PageNotFound */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
>>>>>>> 87d9633905108e5fa350e10510174a1548c8d054
    </BrowserRouter>
  );
};

export default App;
