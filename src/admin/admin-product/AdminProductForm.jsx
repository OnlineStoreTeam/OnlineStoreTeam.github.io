import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAddProductMutation, useAddImageMutation, useEditProductMutation } from '../../store/productApi'
import { 
  LuAlertCircle, 
//   LuAlertTriangle, 
//   LuCheckCircle, 
//   LuChevronDown, 
//   LuChevronLeft, 
//   LuChevronUp, 
//   LuEdit2, 
//   LuFileText, 
  LuImage, 
//   LuMoreHorizontal, 
//   LuPlusCircle, 
//   LuSearch, 
//   LuTrash2, 
  LuX 
} from "react-icons/lu";
import { 
  FiUploadCloud, 
} from "react-icons/fi";

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdminProductForm({closeForm, product}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [addProduct] = useAddProductMutation();
  const [addImage] = useAddImageMutation();
  const [editProduct] = useEditProductMutation();
  const [fileURL, setFileURL] = useState('');
  const [editedProduct, setEditedProduct] = useState(product);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFileURL(url);
      setSelectedFile(file);
      
    } else if(!file){
      setFileURL('');
      setSelectedFile(null);
    }
  };

  const handleFileRemove = () => {
    setFileURL('');
    setSelectedFile(null);
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
        // imagePath: 'product.webp',
      });
    } 
  }, [editedProduct])

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
      validate: v => {
        if (v && v[0] && v[0].size) {
          return v[0].size < 512000 || 'Max size 500kb';
        }
        return true;
      },
    },
  };
  
  const onSubmit = (data) => {
    let newId;
    const formData = new FormData();
    formData.append('imageFile', selectedFile);
    // console.log(formData.getAll());
    if(editedProduct && editedProduct.id){
    //  editProduct({id: editedProduct.id, body: data})
    //   .unwrap()
    //     .then(() => {
    //       addImage({id: editedProduct.id, body: formData})
    //       .then(()=>{
    //         toast.success('Product successfully edited');
    //       })
    //       .catch((error)=>{
    //         console.error('rejected', error);
    //         toast.error('картинку не вдалось додати')
    //       });
    //     })
    //     .catch((error) => {
    //       setSelectedFile(null);
    //       console.error('rejected', error);
    //       toast.error('товар не вдалось редагувати')
    //     });
    //     setEditedProduct({});
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
        // imagePath: 'product.webp',
      }).unwrap()
        .then((payload) => {
          newId = payload;
          addImage({id: newId, body: formData})
          .then(()=>{
            toast.success('Product successfully created');
          })
          .catch((error)=>{
            console.error('rejected', error);
            toast.error('товар додався, але картинка не загрузилась')
          });
        })
        .catch((error) => {
          console.error('rejected', error.data);
          toast.error('не вдалось додати товар')
        });
    }
    closeForm(false);
    reset();
  };


  // const notify1 = () => toast.success("Wow so easy!");
  // const notify2 = () => toast.error("Write your text :)");


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
                <div className='relative'>Image {!selectedFile && <LuAlertCircle className='w-4 h-4 ml-1 inline-block' />}</div>
                <div className='relative'>
                  <input
                    type='file'
                    id='input_file'
                    // className=' w-full input-file '
                    className={' input-file absolute opacity-0 '+(selectedFile? 'w-0': 'w-full')}
                    // placeholder='Max file size 500 kB'
                    accept='.png,.jpg,.jpeg,.webp,'
                    size='512000' 
                    {...register('image', formValidation.image)}
                    onChange={handleFileChange}
                  />
                  {!selectedFile && 
                    <label 
                      htmlFor="input_file" 
                      className='w-full z-20 h-10 mt-0.5 grid grid-cols-[151px_1fr]'
                    > 
                      <span className='h-full px-4 bg-neutral-900 border-l border-t border-b border-neutral-900 rounded-l-sm text-white text-base  whitespace-nowrap flex items-center gap-2'>
                        <FiUploadCloud className='text-xl' />
                        Select Image
                      </span>
                      <span className={'w-full h-full px-3 py-2 border-t border-r border-b rounded-r-sm text-neutral-500'+(errors?.image ? ' input-error' : ' border-neutral-400')}>
                        Max file size 500 kB
                      </span>
                    </label>
                  }
                  {selectedFile &&
                    <div className='input w-2/5 mt-1 flex items-center justify-between'>
                      <img src={fileURL} alt="" className='max-h-full' />
                      <span className='pl-1 grow'>{selectedFile.name}</span>
                      <button type='button' onClick={handleFileRemove}><LuX className='text-lg'/></button>                 
                    </div>
                  }
                
                </div>
                <div className='h-5 mt-1'>
                  {errors?.image &&
                  <p className='text-error flex'>
                    <LuAlertCircle className='w-4 h-4 text-error mr-1' />
                    {errors?.image?.message || 'Error!'}
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
    
     
    </div>
  );
}

export default AdminProductForm;
