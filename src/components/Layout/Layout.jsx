import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from "../Header/Header";

function Layout() {

  return (
    <div className=' h-screen bg-white flex flex-col justify-between '>
      <Header />

      <main className='grow'>
        <Outlet />
      </main>

       <Footer />
    </div>
  );
}

export default Layout;
