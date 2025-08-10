import Loading from "./Loading";

const ImagePreview = (props) => {
    const isDownloadReady = !!props.enhanced && !props.loading;

    return (
        <div className="mt-8 w-full max-w-4xl">
            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Original Image */}
                <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                    <h2 className="text-xl font-semibold text-center bg-gray-800 text-white py-2">
                        Original Image
                    </h2>

                    {props.uploaded ? (
                        <img
                            src={props.uploaded}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-80 bg-gray-200">
                            No Image Selected
                        </div>
                    )}
                </div>

                {/* Enhanced Image */}
                <div className="bg-white shadow-lg rounded-xl overflow-hidden">
                    <h2 className="text-xl font-semibold text-center bg-blue-800 text-white py-2">
                        Enhanced Image
                    </h2>

                    {props.loading ? (
                        <div className="flex items-center justify-center h-80">
                            <Loading />
                        </div>
                    ) : props.enhanced ? (
                        <img
                            src={props.enhanced}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-80 bg-gray-200">
                            No Enhanced Image
                        </div>
                    )}
                </div>
            </div>

            {/* Download Button Outside Cards */}
            <div className="mt-6 flex justify-center">
                <a
                    href={isDownloadReady ? props.enhanced : undefined}
                    download="enhanced-image.png"
                    className={`px-6 py-2 rounded text-white font-semibold transition-colors ${
                        isDownloadReady
                            ? "bg-blue-600 hover:bg-blue-700 cursor-pointer"
                            : "bg-blue-300 cursor-not-allowed"
                    }`}
                >
                    Download Enhanced Image
                </a>
            </div>
        </div>
    );
};

export default ImagePreview;
