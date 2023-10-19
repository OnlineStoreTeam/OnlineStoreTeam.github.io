import { useState, useEffect } from 'react';
import { 
  LuEdit2, 
  LuMoreHorizontal,
  LuSearch,
  LuTrash2, 
 } from 'react-icons/lu';
 import { useGetAllCategoriesQuery } from '../../redux/categories/categoryApi';

function AdminProductItem({ product, editProduct, deleteProduct }) {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [ currentCategory, setCurrentCategory ] = useState();

  const { data } =useGetAllCategoriesQuery({page:0, limit:10});


  useEffect(()=>{
    data?.content.map((category)=>{
      if(category.id === product.categoryId){
      return setCurrentCategory(category.name)
      }
      return null
    })
  }, [data, product.categoryId])
  
  const setStatusColor = (productStatus) => 
  productStatus === 'ACTIVE' ? ' bg-green-400' : 'bg-neutral-500';

  const editProd = (prod)=>{
    editProduct(prod);
    setDisplayMenu(false);
  }
  const deleteProductFunc = (prod)=>{
    deleteProduct(prod)
    setDisplayMenu(false);
  }
  
  return (
    <tr className='border-t border-neutral-300 hover:bg-neutral-100 cursor-pointer'>
      <td className='py-3 px-3 flex justify-center'>
        <img 
          src={product.imagePath}
          alt={product.name} className='h-12 block' 
        />
      </td>
      <td className='py-3 px-5'>{product.name}</td>
      <td className='py-3 px-5'>{product.article}</td>
      <td className='py-3 px-5'>{currentCategory}</td>
      <td className='py-3 px-5 whitespace-nowrap'>$ {product.price}</td>
      <td className='py-3 px-5'>{product.quantity}</td>
      <td className='py-3 px-5'>
        <span className={'py-1 px-3 rounded-full text-white font-bold text-xs uppercase whitespace-nowrap ' + setStatusColor(product.productStatus)}>
          {product.productStatus === 'ACTIVE' ? 'IN STOCK' : 'OUT OF STOCK'}
        </span>
      </td>
      <td className='py-3 px-5'>
        <div className='flex justify-end items-center relative menu'>
          <button 
            className='btn-more-small' 
            onClick={() => setDisplayMenu(prew => !prew)}
          >
            <LuMoreHorizontal />
          </button>
          <div className={
            'w-40 py-2 bg-white border border-neutral-300 rounded flex flex-col items-start gap-1 absolute top-9 right-0 z-[15]' 
            + (displayMenu ? ' block' : ' hidden')
          }>
            <button type='button' className='w-full px-4 text-small flex items-center gap-2 hover:bg-neutral-200' 
              onClick={() => console.log('View')}>
              <LuSearch className='text-base ' />
              View
            </button>
            <button type='button' className='w-full px-4 py-2 text-small flex items-center gap-2 hover:bg-neutral-200' 
              onClick={() =>editProd(product)}>
              <LuEdit2 className='text-base' />
              Edit
            </button>
            <button type='button' className='w-full px-4 text-small flex items-center gap-2 hover:bg-neutral-200' 
              onClick={() => deleteProductFunc(product)}>
              <LuTrash2 className='text-base' />
              Delete
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default AdminProductItem;
