import React from 'react'

const ImageUpload = (props) => {

  const showImageHandler = (e) => {
    const file = (e.target.files[0]);
    if(file){
      props.UploadImageHandler(file);
    }
    
  };
  
  return (
    <div className='bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl hover:scale-105 transition-all duration-250'>
      <label htmlFor='fileInput' className='block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-all duration-250'>
      <span className='text-lg font-medium text-gray-600'>Click or drag to upload your image</span>
      <input type='file' id='fileInput' className='hidden' onChange={showImageHandler}/>
      </label>
      
    </div>
  )
}

export default ImageUpload