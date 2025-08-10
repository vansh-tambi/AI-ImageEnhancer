import React, { useState } from "react";
import Loading from "./Loading";

const ImageUpload = (props) => {
    const [dragActive, setDragActive] = useState(false);

    const allowedFormats = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "image/bmp",
        "image/webp",
        "image/tiff",
        "image/tif",
        "image/x-ms-bmp",
        "image/x-png",
        "image/x-portable-bitmap",
        "image/x-rgb"
    ];

    const validateFile = (file) => {
        if (!file) return false;

        // 1. Check format
        if (!allowedFormats.includes(file.type)) {
            alert("Unsupported format! Please upload JPG, JPEG, BMP, PNG, WEBP, TIFF, TIF, BITMAP, RAW, RGB, JFIF, or LZW.");
            return false;
        }

        // 2. Check file size
        if (file.size > 20 * 1024 * 1024) {
            alert("File too large! Please upload an image ≤ 20MB.");
            return false;
        }

        // 3. Check dimensions (async)
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                if (img.width > 4096 || img.height > 4096) {
                    alert("Image dimensions too large! Max allowed is 4096×4096 pixels.");
                    resolve(false);
                } else {
                    resolve(true);
                }
            };
            img.src = URL.createObjectURL(file);
        });
    };

    const handleFiles = async (files) => {
        if (files && files[0]) {
            const isValid = await validateFile(files[0]);
            if (isValid) {
                props.UploadImageHandler(files[0]);
            }
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        handleFiles(e.dataTransfer.files);
    };

    const handleChange = (e) => {
        handleFiles(e.target.files);
    };

    return (
        <div
            className={`bg-white hover:scale-108 shadow-lg transition-all duration-200 rounded-2xl p-6 w-full max-w-2xl
            ${dragActive ? "border-2 border-blue-500 scale-105" : "border-2 border-transparent"}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <label
                htmlFor="fileInput"
                className="block w-full cursor-pointer border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-all"
            >
                <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    onChange={handleChange}
                    accept=".jpg,.jpeg,.bmp,.png,.webp,.tiff,.tif,.bitmap,.raw,.rgb,.jfif,.lzw"
                />
                <span className="text-lg font-medium text-gray-600">
                    {dragActive
                        ? "Drop your image here"
                        : "Click or drag to upload your image"}
                </span>
            </label>
        </div>
    );
};

export default ImageUpload;