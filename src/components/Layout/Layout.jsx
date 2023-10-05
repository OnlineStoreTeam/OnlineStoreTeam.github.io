import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from "../Header/Header";
import { useMediaQuery } from "@mui/material";


function Layout() {

  const screen = useMediaQuery((theme) => theme.breakpoints.only('lg'));

  return (
    <div className=' h-screen bg-white flex flex-col justify-between '>
      <Header />

      <main className='grow' style={{padding: screen? '150px 0 0 0' : '91px 0 0 0'}}>
        <Outlet />
      </main>

       <Footer />
    </div>
  );
}

export default Layout;
