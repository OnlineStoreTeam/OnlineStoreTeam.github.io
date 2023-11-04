import { useState, useEffect } from "react";
import { Route, Routes, useLocation} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./admin/Admin";
import AdminOrder from "./admin/admin-order/AdminOrder";
import AdminProduct from "./admin/admin-product/AdminProduct";
import LogInPage from "./pages/LogInPage/LogInPage";
import Catalog from "./pages/Catalog/Catalog";
import WaitingPage from "./pages/WaitingPage";
import { CategoryNameContext, CatalogContext } from './components/Context';
import SearchResults from "./pages/SearchResults/SearchResults";
import Layout from "./components/Layout/Layout";

function App() {
  const [categoryName, setCategoryName] = useState('');
  const [searchCatalog, setSearchCatalog] = useState('');
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.split('/')[1];
    if(path === 'products'){
      setCategoryName('All products');
    } else{
      setCategoryName(path);
    }
    
  }, []);

  return (
    <CategoryNameContext.Provider value={{
      categoryName,
      setCategoryName
    }}>
      <CatalogContext.Provider value={{searchCatalog, setSearchCatalog}}>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<WaitingPage/>} />
            <Route path="*" element={<WaitingPage />} />
            <Route path="/admin/auth" element={<LogInPage />} />
            <Route path="products" element={<Catalog />} />
            <Route path="clothing" element={<Catalog />} />
            <Route path="leads&amp;harnesses" element={<Catalog />} />
            <Route path="collars" element={<Catalog />} />
            <Route path="toys" element={<Catalog />} />
            <Route path="furniture" element={<Catalog />} />
            <Route path="care" element={<Catalog />} />
            <Route path="waiting_page" element={<WaitingPage/>} />
            <Route path="search_results" element={<SearchResults/>} />
          </Route>
          <Route path="admin" element={<Admin />}>
            <Route path="order" element={<AdminOrder />} />
            <Route path="product" element={<AdminProduct />} />
          </Route>
        </Routes>
        <ToastContainer position="bottom-left" autoClose={3000} />
        </CatalogContext.Provider>
   </CategoryNameContext.Provider>
  );
}

export default App;
