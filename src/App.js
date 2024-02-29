import React from 'react';
import Home from './components/Pages/Home/Home';
import Login from './components/Pages/Login/Login';
import PageNotFound from './components/Pages/PageNotFound/PageNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GreetingPage from './components/Pages/GreetingPage/GreetingPage';

const App = () => {
  return (
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
    </BrowserRouter>
  );
};

export default App;
