import { useEffect, useRef, useState } from "react";
import { FiUploadCloud, } from "react-icons/fi";

const AdminProductUploadWidget = ({handleImageAdd })=>{
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    const [image, setImage] = useState(false);
    useEffect(()=>{
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dhcuwijir',
            upload_preset: 'l3bqsvps',
            multiple: false,
            maxFiles: 1,
            maxFileSize: 500 * 1024
        }, function(error, result){
            if (error) {
                console.error("Upload error:", error.message);
                return;
              }
            if (result && result.event === "success") {
                const imageName = result.info.original_filename + "." + result.info.format;
                const imageUrl = result.info.secure_url;
                setImage(true);
                handleImageAdd(imageName, imageUrl);
            }
        })
    }, [handleImageAdd])
    return(
        // <button type="button" onClick={()=> widgetRef.current.open()}>
        //     Upload
        // </button>
        <button 
            type="button"
            className='w-full z-20 h-10 mt-0.5 grid grid-cols-[151px_1fr]'
            onClick={()=> widgetRef.current.open()}
        > 
            <span className='h-full px-4 bg-neutral-900 border-l border-t border-b border-neutral-900 rounded-l-sm text-white text-base  whitespace-nowrap flex items-center gap-2'>
            <FiUploadCloud className='text-xl' />
            Select Image
            </span>
            <span className={'w-full h-full px-3 py-2 border-t border-r border-b rounded-r-sm text-neutral-500'+(!image ? ' input-error' : ' border-neutral-400')}>
            {/* <span className={'w-full h-full px-3 py-2 border-t border-r border-b rounded-r-sm text-neutral-500'}> */}
            Max file size 500 kB
            </span>
        </button>
    )
}

export default AdminProductUploadWidget;