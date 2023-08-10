import {useDeleteProductMutation} from '../../store/productApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminProductDeleteMessage({product, isOpenModalDelete}) {

    const [deleteProduct]= useDeleteProductMutation();

    const onDelete = ()=>{
        deleteProduct(product.id)
            .then(()=>{
                toast.success('Product successfully removed');
            })
            .catch((error)=>{
                console.log(error.message);
                toast.error('Failed to delete the product')
            })
        isOpenModalDelete(false);
    }

    return (
        <div className='overlay px-10 flex justify-center items-center lg:px-36 z-40'>
            <div className='w-full max-w-[492px] p-10 bg-white rounded'>
                <div className='flex justify-between mb-6'>
                    <div className='relative w-10 h-14 '>
                        <div className='absolute'>
                            <svg width="46" height="56" viewBox="0 0 46 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Vector" d="M7.00033 1.33325H29.667L44.3337 15.9999V49.3333C44.3337 50.7477 43.7718 52.1043 42.7716 53.1045C41.7714 54.1047 40.4148 54.6666 39.0003 54.6666H7.00033C5.58584 54.6666 4.22928 54.1047 3.22909 53.1045C2.2289 52.1043 1.66699 50.7477 1.66699 49.3333V6.66659C1.66699 5.2521 2.2289 3.89554 3.22909 2.89535C4.22928 1.89515 5.58584 1.33325 7.00033 1.33325Z" fill="#EEEEEE" stroke="#C8C8C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                        <div className='absolute top-0 right-[-4px]'>
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Vector">
                                    <path d="M1.33301 1.33325V17.3333H17.333" fill="#EEEEEE"/>
                                    <path d="M1.33301 1.33325V17.3333H17.333" stroke="#C8C8C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                            </svg>
                        </div>
                        <div className='absolute -bottom-1 -right-3.5'>
                            <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="alert-triangle">
                                    <path id="Vector" d="M21.7304 16.8L13.7304 2.80003C13.556 2.49223 13.303 2.23622 12.9973 2.0581C12.6917 1.87998 12.3442 1.78613 11.9904 1.78613C11.6366 1.78613 11.2892 1.87998 10.9835 2.0581C10.6778 2.23622 10.4249 2.49223 10.2504 2.80003L2.25042 16.8C2.0741 17.1054 1.98165 17.4519 1.98243 17.8045C1.98321 18.1571 2.0772 18.5033 2.25486 18.8078C2.43253 19.1124 2.68757 19.3646 2.99411 19.5389C3.30066 19.7131 3.64783 19.8032 4.00042 19.8H20.0004C20.3513 19.7997 20.6959 19.707 20.9997 19.5313C21.3035 19.3556 21.5556 19.1031 21.7309 18.7991C21.9062 18.4952 21.9985 18.1504 21.9984 17.7995C21.9983 17.4486 21.9059 17.1039 21.7304 16.8Z" fill="#FCCE01" stroke="#E3B901" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path id="Vector_2" d="M12 9V13" stroke="#161616" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path id="Vector_3" d="M12 17H12.0089" stroke="#161616" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between gap-3' >
                        <h1 className='text-center text-base font-bold'>Delete "{product.name}" </h1>
                        <p className='text-center font-normal text-sm leading-5 text-neutral-600 '>Are you sure you want to delete the selected product?</p>
                    </div>
                </div>
                <div className="flex justify-end">
                    <button 
                        className="btn-text"
                        onClick={()=>isOpenModalDelete(false)}
                        >Cancel</button>
                    <button 
                        className="btn-secondary"
                        onClick={()=>onDelete()}
                        >Delete</button>
                </div>
            </div>
        </div>
    )
}

export default AdminProductDeleteMessage;