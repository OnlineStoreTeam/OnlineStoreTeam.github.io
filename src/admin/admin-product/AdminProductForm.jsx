// import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { 
//   LuAlertCircle, 
//   LuAlertTriangle, 
//   LuCheckCircle, 
//   LuChevronDown, 
//   LuChevronLeft, 
//   LuChevronUp, 
//   LuEdit2, 
//   LuFileText, 
//   LuImage, 
//   LuMoreHorizontal, 
//   LuPlusCircle, 
//   LuSearch, 
//   LuTrash2, 
  LuX 
} from "react-icons/lu";
import { 
  FiUploadCloud, 
} from "react-icons/fi";

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function AdminProductForm({closeForm}) {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
    reset,
  } = useForm({
    mode: 'onBlur',
  });

  const formValidation = {
    name: {
      required: 'This field is required!',
      pattern: {
        value: /^[a-zA-Z0-9 ,\._-]{2,50}$/,
        message: 'Invalid character'
      },
      minLength: {
        value: 2,
        message: 'From 2 to 50 characters'
      },
      maxLength: {
        value: 50,
        message: 'From 2 to 50 characters'
      }
    },
    price: {
      required: 'This field is required!',
      min: {
        value: 0,
        message: 'The value cannot be negative'
      },
      validate: v => Number.isInteger(+v * 100) || 'Two digits after the decimal point'
    },
    description: {
      required: 'This field is required!',
      pattern: {
        value: /^[a-zA-Z0-9 '&!#%\(\)\*\+,\.:;_-]{2,255}$/,
        message: 'Invalid character'
      },
      minLength: {
        value: 2,
        message: 'From 2 to 255 characters'
      },
      maxLength: {
        value: 255,
        message: 'From 2 to 255 characters'
      },
    },
    article: {
      required: 'This field is required!',
      pattern: {
        value: /^[A-Z0-9]{3,8}$/,
        message: 'Invalid character'
      },
      minLength: {
        value: 3,
        message: 'From 3 to 8 characters'
      },
      maxLength: {
        value: 8,
        message: 'From 3 to 8 characters'
      }
    },
    quantity: { 
      required: 'This field is required!',
      min: {
        value: 0,
        message: 'The value cannot be negative'
      },
      validate: v => Number.isInteger(+v) || 'Must be an integer'
    },
    category: { required: 'This field is required!' },
    status: { required: 'This field is required!' },
    image: { 
      required: 'This field is required!', 
      validate: v => v[0].size < 512000 || 'validate: Max size 500kb'
    }
  };

  const onSubmit = (data) => {
    console.log(data);
    // addPost({
    //   name: data.name,
    //   article: data.article,
    //   category: data.category,
    //   description: data.description,
    //   price: data.price,
    //   quantity: data.quantity,
    //   status: data.status,
    //   image: 'https://i.pravatar.cc',
    // }).unwrap();
    closeForm(false);
    reset();
  };

  // const notify1 = () => toast.success("Wow so easy!");
  // const notify2 = () => toast.error("Write your text :)");

  return (
    <div className='overlay px-36 flex justify-center items-center'>
      <div className='w-full max-w-screen-lg p-6 bg-white rounded'>
        <div className='flex justify-end'>
          <button
            type='button'
            onClick={() => closeForm(false)}
          >
            <LuX className='text-2xl' />
          </button>
        </div>
        <div className='px-4 pb-4'>
          <h2 className='headline-1'>Add New Product</h2>
          <hr className='my-6 border-neutral-400'/>
          <form
            className='w-full'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='w-full grid grid-cols-[30%_22%_40%] grid-rows-[84px_84px_84px_84px_40px] gap-x-[4%] gap-y-2 text-normal'>
              <div className=''>
                <label className=''>Name
                  <input
                    className={'w-full mt-0.5 input '+(errors?.name ? 'input-error' : '')}
                    maxLength='50'
                    {...register('name', formValidation.name)}
                  />
                </label>
                <div className='h-5 mt-1'>
                  {errors?.name &&
                  <p className='text-error'>
                    {errors?.name?.message || 'Error!'}
                  </p>}
                </div>
              </div>
              <div className=''>
                <label className=''>Price, $
                  <input
                    type='number'
                    className={'w-full mt-0.5 input '+(errors?.price ? 'input-error' : '')}
                    min='0'
                    step='0.01'
                    {...register('price', formValidation.price)}
                  />
                </label>
                <div className='h-5 mt-1'>
                  {errors?.price &&
                  <p className='text-error'>
                    {errors?.price?.message || 'Error!'}
                  </p>}
                </div>
              </div>
              <div className='row-span-3'>
                <label className='relative'>Description
                  <textarea
                    className={'w-full h-[222px] mt-0.5 input py-2 resize-none '+(errors?.description ? 'input-error' : '')}
                    maxLength='255'
                    {...register('description', formValidation.description)}
                  ></textarea>
                  <span className='text-xs text-neutral-800 absolute bottom-2 right-4'>
                    {watch('description')?.length || 0}
                    /255
                  </span>
                </label>
                <div className='h-5'>
                  {errors?.description &&
                  <p className='text-error'>
                    {errors?.description?.message || 'Error!'}
                  </p>}
                </div>
              </div>
              <div className=''>
                <label className=''>Code
                  <input
                    className={'w-full mt-0.5 input '+(errors?.article ? 'input-error' : '')}
                    maxLength='8'                  {...register('article', formValidation.article)}
                  />
                </label>
                <div className='h-5 mt-1'>
                  {errors?.article &&
                  <p className='text-error'>
                    {errors?.article?.message || 'Error!'}
                  </p>}
                </div>
              </div>
              <div className=''>
                <label className=''>Quantity
                  <input
                    type='number'
                    className={'w-full mt-0.5 input '+(errors?.quantity ? 'input-error' : '')}
                    min='0'
                    {...register('quantity', formValidation.quantity)}
                  />
                </label>
                <div className='h-5 mt-1'>
                  {errors?.quantity &&
                  <p className='text-error'>
                    {errors?.quantity?.message || 'Error!'}
                  </p>}
                </div>
              </div>
              <div className=''>
                <label className=''>Category
                  <select
                    className={'w-full mt-0.5 input '+(errors?.category ? 'input-error' : '')}
                    defaultValue=''
                    {...register('category', formValidation.category)}
                  >
                    <option value='' disabled>
                      Category
                    </option>
                    <option value='Clothing'>Clothing</option>
                    <option value='Leads&harnesses'>Leads&harnesses</option>
                    <option value='Toys'>Toys</option>
                    <option value='Care'>Care</option>
                    <option value='Forniture'>Forniture</option>
                    <option value='Collars'>Collars</option>
                  </select>
                </label>
                <div className='h-5 mt-1'>
                  {errors?.category &&
                  <p className='text-error'>
                    {errors?.category?.message || 'Error!'}
                  </p>}
                </div>
              </div>
              <div className=''>
                <label className=''>Status
                  <select
                    className={'w-full mt-0.5 input'+(errors?.status ? 'input-error' : '')}
                    defaultValue=''
                    {...register('status', formValidation.status)}
                  >
                    <option value='' disabled>
                      Status
                    </option>
                    <option value='ACTIVE'>Enabled</option>
                    <option value='TEMPORARILY_ABSENT'>Out of stock</option>
                  </select>
                </label>
                <div className='h-5 mt-1'>
                  {errors?.status &&
                  <p className='text-error'>
                    {errors?.status?.message || 'Error!'}
                  </p>}
                </div>
              </div>
              <div className='col-span-2'>
                <label className='relative'>Image
                  {/* <span className='w-full h-10 mt-0.5 grid grid-cols-[151px_1fr]'>
                    <button className='h-full px-4 bg-neutral-900 border-l border-t border-b border-neutral-900 rounded-l-sm text-white text-base  whitespace-nowrap flex items-center gap-2'>
                      <FiUploadCloud className='text-xl' />
                      Select Image
                    </button>
                    <span className={'w-full h-full px-3 py-2 border-t border-r border-b rounded-r-sm text-neutral-500 '+(errors?.image ? 'input-error' : 'border-neutral-400')}>
                      {'Max file size 500 kB'}
                    </span>
                  </span> */}
                  <input
                    type='file'
                    className={'w-full mt-0.5 input input-file '+(errors?.image ? 'input-error' : '')}
                    placeholder='Max file size 500 kB'
                    accept='.png,.jpg,.jpeg,.webp,'
                    size='512000'
                    {...register('image', formValidation.image)}
                  />
                </label>
                <div className='h-5 mt-1'>
                  {errors?.image &&
                  <p className='text-error'>
                    {errors?.image?.message || 'Error!'}
                  </p>}
                </div>
              </div>
              <div className='row-start-5 col-span-2'>
                <button
                  type='button'
                  className='btn-secondary w-40 mr-10'
                  onClick={() => closeForm(false)}
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  disabled={!isValid}
                  className='btn-primary w-40'
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    
      {/* <ToastContainer 
        position="bottom-left" 
        autoClose={3000} 
      /> */}
    </div>
  );
}

export default AdminProductForm;
