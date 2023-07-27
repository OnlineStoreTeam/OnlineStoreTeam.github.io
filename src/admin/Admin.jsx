import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

import { 
  LuChevronLeft, 
  LuFileText, 
  LuLogOut, 
} from "react-icons/lu";

function Admin() {
  const setActiveLink = ({ isActive }) =>
    'w-full mb-8 pl-14 py-2 headline-2 flex items-center gap-3  hover:bg-neutral-100/20 ' + (isActive ? 'bg-orange-400 hover:bg-orange-400 text-white' : 'bg-transparent text-neutral-400');

  return (
    <div className='grid grid-cols-[256px_1fr]'>

      <div className=' fixed top-0 left-0 min-h-screen h-full py-10 bg-black text-white'>
        <Link to={'/'} className='inline-block w-36 h-11 mx-14 p-2 bg-[#808080] text-2xl text-center font-["Inter"]'>LOGO</Link>
        <nav className='pt-16'>
          <NavLink to={'product'} className={setActiveLink}>
            <LuFileText  className='text-xl' />
            Products
          </NavLink>
          <NavLink to={'order'} className={setActiveLink}>
            <LuFileText  className='text-xl' />
            Orders
          </NavLink>
        </nav>
      </div>

      <div className='text-black relative col-start-2 col-end-3 w-full'>

        <header className='fixed top-0 left-[256px] right-0 h-19 py-4 pl-6 pr-14 border-b border-neutral-600 flex justify-between items-center bg-white z-20'>
          <Link to={'/'} className='btn-text btn-image'>
            <LuChevronLeft className='text-xl' />
            View your store
          </Link>
          <div className='flex items-center gap-16'>
            <button 
              className='btn-text btn-image hover:text-black active:text-black' 
              onClick={() => console.log('I am Admin :)')}
            >
              <span className='w-6 h-6 p-0.5 bg-neutral-900 rounded-full text-sm text-white'>A</span>
              Admin
            </button>
            <button 
              className='btn-secondary btn-image' 
              onClick={() => console.log('Admin Log Out')}
            >
              <LuLogOut  className='text-xl' />
              Log Out
            </button>
          </div>
        </header>

        <main className='mt-24'>
          <Outlet />
        </main>

      </div>
    </div>
  );
}

export default Admin;
