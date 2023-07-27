 import { useState } from "react";
 import ReactPaginate from 'react-paginate';
 
 export const Pagination = ({itemsPerPage, items, onPageChange})=>{
    const [itemOffset, setItemOffset] = useState(0);
    // const endOffset = itemOffset + itemsPerPage;
    // const currentItems = items?.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items?.length / itemsPerPage);

    const isPreviousButtonDisabled = itemOffset === 0;
    const isNextButtonDisabled = itemOffset + itemsPerPage >= items?.length;
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items?.length;
        setItemOffset(newOffset);
        onPageChange(newOffset);
    };
    return(
        <ReactPaginate
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          containerClassName='pagination flex'
          previousLabel='Previous'
        //   previousClassName={isPreviousButtonDisabled? 'text-red-500' : ''}
          previousLinkClassName={isPreviousButtonDisabled? 'pagination-btn opacity-40' : 'pagination-btn'}
          nextLabel='Next'
          // nextClassName='page-item'
          nextLinkClassName={isNextButtonDisabled? 'pagination-btn opacity-40' : 'pagination-btn'}
          // pageClassName='page-item'
          pageLinkClassName='inline-block w-10 h-10 p-2 border text-center'
          activeLinkClassName='bg-black border-black text-white'
          disabledClassName='text-gray-400'
          breakLabel='...'
          // breakClassName='page-item'
          breakLinkClassName='inline-block w-10 h-10 p-2 border text-center'
          renderOnZeroPageCount={null}
        />
    )
 }


 
 
