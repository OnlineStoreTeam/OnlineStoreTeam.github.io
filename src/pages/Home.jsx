// import { useState } from 'react';
// import { Link } from 'react-router-dom';

import {NavLink} from "react-router-dom";
import {Box} from "@mui/material";

function Home() {
    const setActiveLink = ({ isActive }) =>
    'mx-5 p-3 rounded-md ' + (isActive ? 'text-white' : 'text-white');

//   function get(){
//     return fetch('http://localhost:8080/admin/products?page=0&size=10')
//         .then(response => {
//           console.log(response);
//           response.json();
//         })
//         .then(data => console.log(data))
//         .catch(err => console.log(err))
// }

// get();

  return (
    <div>
        <h1 className='mt-4 text-neutral-600 text-3xl font-bold text-center'>
            Home
        </h1>
        
        <Box sx={{backgroundColor: 'grey', width: '150px', padding: '10px', margin: '0 auto' }}>
           <NavLink to='/admin/product' className={setActiveLink}>Admin</NavLink>
        </Box>
  
    </div>
  );
}

export default Home;
