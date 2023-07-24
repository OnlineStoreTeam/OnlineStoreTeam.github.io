import { Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';

import Home from './pages/Home';

import Admin from './admin/Admin';
import AdminOrder from './admin/admin-order/AdminOrder';
import AdminProduct from './admin/admin-product/AdminProduct';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='*' element={<Home />} />
        </Route>
        <Route path='admin' element={<Admin />}>
            <Route path='order' element={<AdminOrder />} />
            <Route path='product' element={<AdminProduct />} />
          </Route>
      </Routes>
    </>
  );
}

export default App;
