import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  const setActiveLink = ({ isActive }) =>
    'mx-5 p-3 rounded-md ' + (isActive ? 'text-white' : 'text-white');

  return (
    <header className=''>
      <nav className='py-2 px-9 bg-[#808080]'>
          <NavLink to='/' className={setActiveLink}>About us</NavLink>
          <NavLink to='/' className={setActiveLink}>Custumer service</NavLink>
          <NavLink to='/' className={setActiveLink}>Contacts</NavLink>
          <NavLink to='/' className={setActiveLink}>Blog</NavLink>
          <NavLink to='/admin/product' className={setActiveLink}>Admin</NavLink>
        </nav>
        <div className='py-6 px-14'>
        <Link to={'/'} className='inline-block w-52 p-4 bg-[#808080] text-white text-2xl text-center'>LOGO</Link>
        </div>
    </header>
  );
}

export default Header;
