import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from "../Header/Header";

function Layout() {

  return (
    <div className='bg-white'>
      <Header />

      <main>
        <Outlet />
      </main>

       <Footer />
    </div>
  );
}

export default Layout;
