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
        <button 
          className='justify-self-end flex items-center text-white hover:cursor-pointer' 
          type='button'
          name="language">
            <span>En</span>
            <LuChevronDown />
        </button> 
      </nav>
      <div className='py-6 px-14'>
        <div className='flex justify-between items-center'>
          <Link to={'/'} className='inline-block w-52 p-4 bg-[#808080] text-white text-2xl text-center'>LOGO</Link>
          <fieldset className=' w-[422px] border-b flex justify-center' >
            <input 
              type="text" 
              name="search-field"
              className=' px-4 py-2 grow outline-0 placeholder:text-black  placeholder:text-bold placeholder:text-xl'
              style={{color:'black'}}
              placeholder='Search'
            />
            <button type='button' name='search-button' className=''>
              <LuSearch className='h-6 w-6 font-light'/>
            </button>
          </fieldset>
          <div className='flex justify-center items-center w-[200px] gap-8'>
            <NavLink to='/' className=''><LuHeart className='h-6 w-6' /></NavLink>
            <NavLink to='/' className=''><LuUser className='h-6 w-6' /></NavLink>
            <NavLink to='/' className=''><LuShoppingCart className='h-6 w-6' /></NavLink>
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
