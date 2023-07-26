import { useState } from 'react';
import { 
  LuEdit2, 
  LuMoreHorizontal,
  LuSearch,
  LuTrash2, 
 } from 'react-icons/lu';

function AdminProductItem({ product }) {
  const [displayMenu, setDisplayMenu] = useState(false);
  const setStatusColor = (productStatus) => 
  productStatus === 'ACTIVE' ? ' bg-green-400' : 'bg-neutral-500';
    
  return (
    <tr className='border-t border-neutral-300'>
      <td className='py-3 px-5'>
        <img 
          // src={product.imagePath} 
          // src={'http://localhost:8080/'+product.image} 
          // src='http://localhost:8080/images/product.webp' 
          src='/product.webp' 
          alt={product.name} className='h-12' 
        />
      </td>
      <td className='py-3 px-5'>{product.name}</td>
      <td className='py-3 px-5'>{product.article}</td>
      <td className='py-3 px-5'>{product.category}</td>
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
            'w-40 py-2 bg-white border border-neutral-300 rounded flex flex-col items-start gap-1 absolute top-9 right-0 z-[1]' 
            + (displayMenu ? ' block' : ' hidden')
          }>
            <button type='button' className='w-full px-4 text-small flex items-center gap-2' 
              onClick={() => console.log('View')}>
              <LuSearch className='text-base' />
              View
            </button>
            <button type='button' className='w-full px-4 py-2 text-small flex items-center gap-2' 
              onClick={() => console.log('Edit')}>
              <LuEdit2 className='text-base' />
              Edit
            </button>
            <button type='button' className='w-full px-4 text-small flex items-center gap-2' 
              onClick={() => console.log('Delete')}>
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