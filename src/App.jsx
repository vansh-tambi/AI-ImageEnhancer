import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-1 text-gray-800">AI Image Enhancer</h1>
        <p className="text-lg text-gray-500">
          Upload your image and let AI enhance it in Seconds!
        </p>
      </div>

      <Home />

      {/* File restrictions note */}
      <p className="text-xs text-gray-500 mt-4 text-center max-w-md">
        Supported formats: <span className="font-medium">JPG, JPEG, BMP, PNG, WEBP, TIFF, TIF, BITMAP, RAW, RGB, JFIF, LZW</span>.  
        Max resolution: <span className="font-medium">4096×4096</span>.  
        Max file size: <span className="font-medium">20 MB</span>.
      </p>

      <div className="text-sm text-gray-500 mt-6">
        Powered by @vanshtambi
      </div>
    </div>
  );
}

export default App;
