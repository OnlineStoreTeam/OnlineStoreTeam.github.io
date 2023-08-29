import React, { useEffect, useState } from 'react';
import { set, useForm } from 'react-hook-form';
import { useAddProductMutation, useEditProductMutation } from '../../store/productApi'
import { 
  LuAlertCircle, 
  LuX 
} from "react-icons/lu";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminProductUploadWidget from './AdminProductUploadWidget';

function AdminProductForm({closeForm, product, allProducts}) {
  const [addProduct] = useAddProductMutation();
  const [editProduct] = useEditProductMutation();
  const [editedProduct, setEditedProduct] = useState(product);
  const [imageUrl, setImageUrl] = useState();
  const [imageName, setImageName] = useState();

  const handleImageAdd = (name, url)=>{
    setImageName(name);
    setImageUrl(url);
  }
  const handleFileRemove = () => {
    setImageName('');
    setImageUrl('');
  };
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    watch,
    reset,
  } = useForm({
    // defaultValues: {
    //   name: 'Name',
    //   article: 'BBBGGG01',
    //   category: 'Toys',
    //   description: 'Product description',
    //   price: 600,
    //   quantity: 135,
    //   productStatus: 'ACTIVE',
    //   imagePath: 'product.webp',
    // },
    mode: 'onBlur',
  });
  
  useEffect(()=>{
    if (editedProduct) {
      reset({
        name: editedProduct.name,
        article: editedProduct.article,
        category: editedProduct.category,
        description: editedProduct.description,
        price: editedProduct.price,
        quantity: editedProduct.quantity,
        status: editedProduct.productStatus,
        
      });
      setImageUrl(editedProduct.imagePath);
    } 
  }, [product])

  const formValidation = {
    name: {
      required: 'This field is required!',
      pattern: {
        value: /^[a-zA-Z0-9 ,\._-]{2,50}$/,
        message: 'Name should only contain alphanumeric characters'
      },
      minLength: {
        value: 2,
        message: 'Name should be between 2 and 50 characters long'
      },
      maxLength: {
        value: 50,
        message: 'Name should be between 2 and 50 characters long'
      },
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
        message: 'Description should only contain alphanumeric characters'
      },
      minLength: {
        value: 2,
        message: 'Description should be between 2 and 255 characters long'
      },
      maxLength: {
        value: 255,
        message: 'Description should be between 2 and 255 characters long'
      },
    },
    article: {
      required: 'This field is required!',
      pattern: {
        value: /^[A-Z0-9]{3,8}$/,
        message: 'Article should only contain alphanumeric characters'
      },
      minLength: {
        value: 3,
        message: 'Article should be between 3 and 8 characters long'
      },
      maxLength: {
        value: 8,
        message: 'Article should be between 3 and 8 characters long'
      }
    },
    quantity: { 
      required: 'This field is required!',
      min: {
        value: 0,
        message: 'The value cannot be negative'
      },
      validate: v => {
        const regex = /^\d+$/;
        if (v.toString().charAt(0) === '+') {
          return 'Invalid characters';
        }
        if (!regex.test(v)) {
          return 'Must be an integer';
        }
        return true;
      },
      
    },
    category: { required: 'This field is required!' },
    status: { required: 'This field is required!' },
    image: { 
      required: 'This field is required!', 
    },
  };
  
  const onSubmit = (data) => {
    if(editedProduct && editedProduct.id){
      const newProduct = {
        name: data.name,
        article: data.article,
        category: data.category,
        description: data.description,
        price: data.price,
        quantity: data.quantity,
        productStatus: data.status,
        imagePath: imageUrl
      }
     
    //  console.log(newProduct.imagePath)
     editProduct({id: editedProduct.id, body: newProduct})
        .then(() => {
          // console.log(newProduct.imagePath)
            toast.success('Product successfully edited');
        })
        .catch((error) => {
          console.error('rejected', error);
          toast.error('Editing the product was unsuccessful')
        });
      setEditedProduct({});
      closeForm(false);
      reset();
    }
    else{
      addProduct({
        name: data.name,
        article: data.article,
        category: data.category,
        description: data.description,
        price: data.price,
        quantity: data.quantity,
        productStatus: data.status,
        imagePath: imageUrl,
      }).then(() => {
          toast.success('Product successfully created');
          closeForm(false);
          reset();
        })
        .catch((error) => {
          if(allProducts.find(prod=>prod.article === data.article)){
            toast.error('Such an article already exists')
          } else{
            toast.error('Adding the product was unsuccessful')
            closeForm(false);
            reset();
          }
          console.error('rejected', error.data);
        });
    }
  };

  return (
    <div className='overlay px-10 flex justify-center items-center lg:px-36 z-40'>
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
            <div className='w-full grid grid-cols-[30%_22%_40%] grid-rows-[84px_84px_84px_minmax(84px,_104px)_40px] gap-x-[4%] gap-y-2 text-normal'>
              <div className=''>
                <label className='relative'>Name
                  <input
                    className={'w-full mt-0.5 input '+(errors?.name ? 'input-error' : '')}
                    maxLength='50'
                    {...register('name', formValidation.name)}
                  />
                  {errors?.name && <LuAlertCircle className='absolute w-5 h-5 right-2 top-8 text-error' />}
                </label>
                <div className='h-5 mt-1'>
                  {errors?.name &&
                  <p className='text-error'>
                    {errors?.name?.message || 'Error!'}
                  </p>}
                </div>
              </div>
              <div className=''>
                <label className='relative'>Price, $
                  <input
                    type='number'
                    className={'w-full mt-0.5 input '+(errors?.price ? 'input-error' : '')}
                    min='0'
                    step='0.01'
                    {...register('price', formValidation.price)}
                  />
                  {errors?.price && <LuAlertCircle className='absolute w-5 h-5 right-9 top-8 text-error' />}
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
                  <p className='text-error flex'>
                    <LuAlertCircle className='w-4 h-4 text-error mr-1' />
                    {errors?.description?.message || 'Error!'}
                  </p>}
                </div>
              </div>
              <div className=''>
                <label className='relative'>Code
                  <input
                    className={'w-full mt-0.5 input '+(errors?.article ? 'input-error' : '')}
                    maxLength='8'                  {...register('article', formValidation.article)}
                  />
                  {errors?.article && <LuAlertCircle className='absolute w-5 h-5 right-2 top-8 text-error' />}
                </label>
                <div className='h-5 mt-1'>
                  {errors?.article &&
                  <p className='text-error'>
                    {errors?.article?.message || 'Error!'}
                  </p>}
                </div>
              </div>
              <div className=''>
                <label className='relative'>Quantity
                  <input
                    type='text'
                    className={'w-full mt-0.5 input '+(errors?.quantity ? 'input-error' : '')}
                    min='0'
                    {...register('quantity', formValidation.quantity)}
                  />
                  {errors?.quantity && <LuAlertCircle className='absolute w-5 h-5 right-2 top-8 text-error' />}
                </label>
                <div className='h-5 mt-1'>
                  {errors?.quantity &&
                  <p className='text-error'>
                    {errors?.quantity?.message || 'Error!'}
                  </p>}
                </div>
              </div>
              <div className=''>
                <label className='relative'>Category
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
                <label className='relative'>Status
                  <select
                    className={'w-full mt-0.5 input '+(errors?.status ? 'input-error' : '')}
                    defaultValue=''
                    {...register('status', formValidation.status)}
                  >
                    <option value='' disabled>
                      Status
                    </option>
                    <option value='ACTIVE'>In stock</option>
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
                <div className='relative'>Image {!imageUrl && <LuAlertCircle className='w-4 h-4 ml-1 inline-block' />}</div>
                <div className='relative'>
                  {!imageUrl && 
                    <AdminProductUploadWidget 
                      handleImageAdd={handleImageAdd} 
                    />
                  }
                  {imageUrl &&
                    <div className='input w-2/5 mt-1 flex items-center justify-between'>
                      <img src={imageUrl} alt="" className='max-h-full' />
                      <span className='pl-1 grow'>{imageName}</span>
                      <button type='button' onClick={handleFileRemove}><LuX className='text-lg'/></button>                 
                    </div>
                  }
                
                </div>
                <div className='h-5 mt-1'>
                  {!imageUrl &&
                  <p className='text-error flex'>
                    <LuAlertCircle className='w-4 h-4 text-error mr-1' />
                    {'This field is required!'}
                  </p>}
                </div>
              </div>
              <div className='row-start-5 col-span-3 lg:col-span-2'>
                <button
                  type='button'
                  className='btn-secondary w-40 mr-10'
                  onClick={() => closeForm(false)}
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  disabled={!isValid || !imageUrl}
                  className='btn-primary w-40'
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    
     
    </div>
  );
}

export default AdminProductForm;
