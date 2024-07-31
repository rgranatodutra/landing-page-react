import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton'; 

function App() {
  return (
    <>
      <BrowserRouter>
      {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
