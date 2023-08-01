import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { 
  LuPlusCircle, 
  LuSearch,
} from "react-icons/lu";

import { 
  useGetAllProductsQuery,
} from '../../store/productApi';
import AdminProductForm from './AdminProductForm';
import AdminProductItem from './AdminProductItem';
import { Pagination } from '../../components/details/Pagination';
import { useMemo } from 'react';


function AdminProduct() {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [countResults, setCountResults] = useState(0);    // можливо змінну треба змінити на кількість отриману з сервера
  const { data } = useGetAllProductsQuery({page: 0, limit: 10});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const closeForm = (state) => {
    setFormIsOpen(state);
  };
  const itemsPerPage = 10;
  const [currentProducts, setCurrentProducts ] = useState(data?.content);
  
  const getProductCount = useMemo(()=>{
    return setCountResults(data?.content?.length);
  }, [data])

  useEffect(()=>{
    if(data){
      setCurrentProducts(data.content);
      setCountResults(data.totalElements);
    }
  }, [data])

  const handlePageChange = (newItemOffset) => {
    const newCurrentItems = data?.content?.slice(newItemOffset, newItemOffset + itemsPerPage);
    setCurrentProducts(newCurrentItems);
  };

  const editProduct = (prod)=>{
    setFormIsOpen(true);
    setSelectedProduct(prod);
  }
 
  return (
    <div className='mt-4 mr-14 mb-16 ml-6'>
      <nav className='text-small'>
        {/* <Link to={'/admin'}>Dashboard</Link> */}
        <span>Dashboard</span>
        <span> / </span>
        <span className='text-neutral-900'>Products</span>
      </nav>
      
      <div className='flex justify-between items-end'>
        <div className=''>
          <h1 className='mt-8 headline-1'>Products</h1>
          <p className=''>Manage your product catalog</p>
        </div>
        <button 
          className='btn-primary btn-image'
          onClick={ () => setFormIsOpen(prev => !prev) }>
          <LuPlusCircle className='text-xl' />
          Add Product
        </button>
      </div>

      {formIsOpen && 
      <AdminProductForm closeForm={closeForm} product={selectedProduct}/>}

      <div className='mt-6 border border-neutral-300 rounded'>
        <table className=' w-full text-normal'>
          <thead>
            <tr className=''>
              <td colSpan='8' className='p-4'>
                <div className='flex justify-between items-center'>
                  <h2 className='headline-3'>Products Catalog</h2>
                  <div className='flex gap-6'>
                    <button
                      className='py-1 px-2 bg-neutral-300 rounded-sm flex items-center gap-2'
                      onClick={() => console.log('Filter: All Products')}
                    >All Products</button>
                    <button
                      className='py-1 px-2 rounded-sm flex items-center gap-2 hover:bg-neutral-300'
                      onClick={() => console.log('Filter: Clothing')}
                    >Clothing</button>
                    <button
                      className='py-1 px-2 rounded-sm flex items-center gap-2 hover:bg-neutral-300'
                      onClick={() => console.log('Filter: Leads&harnesses')}
                    >Leads&harnesses</button>
                    <button
                      className='py-1 px-2 rounded-sm flex items-center gap-2 hover:bg-neutral-300'
                      onClick={() => console.log('Filter: Toys')}
                    >Toys</button>
                    <button
                      className='py-1 px-2 rounded-sm flex items-center gap-2 hover:bg-neutral-300'
                      onClick={() => console.log('Filter: Care')}
                    >Care</button>
                    <button
                      className='py-1 px-2 rounded-sm flex items-center gap-2 hover:bg-neutral-300'
                      onClick={() => console.log('Filter: Forniture')}
                    >Forniture</button>
                    <button
                      className='py-1 px-2 rounded-sm flex items-center gap-2 hover:bg-neutral-300'
                      onClick={() => console.log('Filter: Collars')}
                    >Collars</button>
                  </div>
                </div>
              </td>
            </tr>
            <tr className='border-t border-neutral-300'>
              <td colSpan='8' className='p-4'>
                <div className='flex justify-between items-center'>
                  <p className=''>{ countResults } Products Displayed</p>
                  <div className='w-[300px] p-1 border border-neutral-400 rounded-sm flex items-center gap-1'>
                    <button 
                      className='' 
                      onClick={() => console.log('Search')}
                    >
                      <LuSearch className='m-1 text-base' />
                    </button>
                    <input 
                      type='search' 
                      className='w-full p-1' 
                      placeholder='Search'
                    />
                  </div>
                </div>
              </td>
            </tr>
            <tr className='bg-neutral-300 border-t border-neutral-300 text-neutral-800 text-xs text-left uppercase'>
              <th className='py-3 px-5'>Image</th>
              <th className='py-3 px-5'>Name</th>
              <th className='py-3 px-5'>Code</th>
              <th className='py-3 px-5'>Category</th>
              <th className='py-3 px-5'>Price</th>
              <th className='py-3 px-5'>Quantity</th>
              <th className='py-3 px-5'>Status</th>
              <th className='py-3 px-5'></th>
            </tr>
          </thead>
          <tbody>
            {!data && 
              <tr className='border-t border-neutral-300'>
                <td colSpan='8' className='py-5 px-4 text-neutral-800'>
                  You have not added any products yet
                </td>
              </tr>
            }
            {/* {data.map(product => <AdminProductItem key={product.id} product={product} />)} */}
            {currentProducts?.map(product => <AdminProductItem key={product.id} product={product} editProduct={editProduct} />)}           
          </tbody>
        </table>
      </div>

      <div className='mt-12 flex justify-between'>
        <button 
          type='button'
          className='py-1.5 px-2.5 border rounded text-xs font-bold uppercase'
          onClick={() => console.log('Show 10 results')}
        >Show 10 Results</button>
        <Pagination itemsPerPage={itemsPerPage} items={data?.content} onPageChange={handlePageChange} />
      </div>
    </div>
  );
}

export default AdminProduct;
