import ImageUpload from './ImageUpload'
import { useState } from 'react'
import ImagePreview from './ImagePreview'

const Home = () => {

  const [uploadImage, setUploadImage] = useState();
  const [enhancedImage, setEnhancedImage] = useState();
  const [loading, setLoading] = useState(false);
  const UploadImageHandler = (file)=>{
    setUploadImage(URL.createObjectURL(file));
    setLoading(true);
    //calling the api to enhance the image

  };

  return (
    <>
        <ImageUpload UploadImageHandler={UploadImageHandler}/>
        <ImagePreview loading={loading}
        uploadImage={uploadImage}
        enhanced={enhancedImage}/>
    </>
  )
}

export default Home