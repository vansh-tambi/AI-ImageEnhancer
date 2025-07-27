import './App.css'
import Home from './components/Home'

function App() {

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-200 py-8 px-4'>
      <div className='text-center mb-8'>
        <h1 className='text-5xl font-bold mb-1 text-gray-800'>AI Image Enhancer</h1>
        <p className='text-lg text-gray-500'>Upload your image and let AI enhance it in Seconds!</p>
      </div>

      <Home/>

      <div className='text-sm text-gray-500 mt-6'>
        Powered by @vanshtambi
      </div>
    </div>
  )
}

export default App
