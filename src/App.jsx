import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout/Layout';

import Home from './pages/Home';

import Admin from './admin/Admin';
import AdminOrder from './admin/admin-order/AdminOrder';
import AdminProduct from './admin/admin-product/AdminProduct';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LogInPage from "./pages/LogInPage/LogInPage";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='*' element={<Home />} />
            <Route path="/admin/auth" element={<LogInPage />} />
        </Route>
        <Route path='admin' element={<Admin />}>
            <Route path='order' element={<AdminOrder />} />
            <Route path='product' element={<AdminProduct />} />
        </Route>
      </Routes>
      <ToastContainer 
        position="bottom-left" 
        autoClose={3000} 
      />
    </>
  );
}

export default App;
