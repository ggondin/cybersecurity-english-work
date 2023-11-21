import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home/Home'
import Malwares from './Pages/Malwares/Malwares'
import Team from './Pages/Team/Team'
import Menu from './components/Menu/Menu';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Footer from './components/Footer/Footer';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />
      <Routes>
        <Route index element={<Home />} />
        <Route path='/malwares' element={<Malwares />} />
        <Route path='/team' element={<Team />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
