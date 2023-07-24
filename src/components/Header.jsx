import React from 'react';
import { NavLink, Link, Routes, Route} from 'react-router-dom';
import { Home } from '../pages/Home';
import { AdminProduct } from '../admin/admin-product/AdminProduct';
import {  
  LuSearch,
  LuHeart,
  LuUser,
  LuShoppingCart,
  LuChevronDown
} from "react-icons/lu";

function Header() {
  const setActiveLink = ({ isActive }) =>
    'mx-5 p-3 rounded-md ' + (isActive ? 'text-white' : 'text-white');

  return (
    <header className=''>
      <nav className='py-2 px-9 bg-[#808080] flex items-center justify-between text-base'>
        <div>
          <NavLink to='/' className={setActiveLink}>About us</NavLink>
          <NavLink to='/' className={setActiveLink}>Custumer service</NavLink>
          <NavLink to='/' className={setActiveLink}>Contacts</NavLink>
          <NavLink to='/' className={setActiveLink}>Blog</NavLink>
          <NavLink to='/admin/product' className={setActiveLink}>Admin</NavLink>
        </div>
        <div className='justify-self-end flex items-center text-white hover:cursor-pointer'>
          <span>En</span>
          <LuChevronDown />
        </div> 
      </nav>
      <div className='py-6 px-14'>
        <div className='flex justify-between items-center'>
          <Link to={'/'} className='inline-block w-52 p-4 bg-[#808080] text-white text-2xl text-center'>LOGO</Link>
          <div className='relative w-[422px] '>
            <input 
              type="text" 
              className='border-b px-4 py-2 w-full outline-0 placeholder:text-black  placeholder:text-bold placeholder:text-xl'
              style={{color:'black'}}
              placeholder='Sheach'
            />
            <LuSearch className='absolute top-1/2 -translate-y-1/2 right-4 h-6 w-6 font-light'/>
          </div>
          <div className='flex justify-center items-center w-[200px] gap-8'>
            <LuHeart className='h-6 w-6' />
            <LuUser className='h-6 w-6' />
            <LuShoppingCart className='h-6 w-6' />
          </div>
        </div> 
        <div className='py-6 flex justify-between items-center text-xl'>
          <NavLink to='/' className=''>Clothing</NavLink>
          <NavLink to='/' className=''>LEADS & HARNESSES</NavLink>
          <NavLink to='/' className=''>Collars</NavLink>
          <NavLink to='/' className=''>Toys</NavLink>
          <NavLink to='/' className=''>Forniture</NavLink>
          <NavLink to='/' className=''>Care</NavLink>
          <NavLink to='/' className=''>Sale</NavLink>
        </div>     
      </div>
      
    </header>
  );
}

export default Header;
