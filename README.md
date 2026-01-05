# AI Image Enhancer 🖼️✨

A modern web application that uses AI to automatically enhance and upscale your images. Built with React, Vite, and Tailwind CSS, this tool provides a simple and intuitive interface to improve image quality with just a few clicks.

## Features

- 🚀 **AI-Powered Enhancement**: Leverages advanced AI algorithms to upscale and enhance images
- 📤 **Easy Upload**: Drag-and-drop or click to upload images
- 👀 **Real-time Preview**: Side-by-side comparison of original and enhanced images
- 💾 **Download Results**: Save your enhanced images instantly
- 🎨 **Modern UI**: Clean, responsive interface built with Tailwind CSS
- ⚡ **Fast Processing**: Built on Vite for optimal performance

## Supported Formats

- **Image Types**: JPG, JPEG, BMP, PNG, WEBP, TIFF, TIF, BITMAP, RAW, RGB, JFIF, LZW
- **Max Resolution**: 4096×4096 pixels
- **Max File Size**: 20 MB

## Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **HTTP Client**: Axios
- **Linting**: ESLint 9

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ai-image-enhancer.git
cd ai-image-enhancer
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your API credentials:
```env
VITE_IMAGE_ENHANCE_API_KEY=your_api_key_here
VITE_BASE_URL=your_api_base_url_here
```

## Usage

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

Build the application for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Linting

Run ESLint to check code quality:
```bash
npm run lint
```

## Project Structure

```
AI ImageEnhancer/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   ├── components/        # React components
│   │   ├── Home.jsx       # Main container component
│   │   ├── ImageUpload.jsx    # File upload component
│   │   ├── ImagePreview.jsx   # Image comparison component
│   │   └── Loading.jsx    # Loading indicator
│   ├── utils/
│   │   └── enhanceImageApi.js # API integration
│   ├── App.jsx            # Root component
│   ├── App.css            # App styles
│   ├── index.css          # Global styles
│   └── main.jsx           # Entry point
├── .gitignore
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
└── vite.config.js         # Vite configuration
```

## How It Works

1. **Upload**: User uploads an image through the ImageUpload component
2. **Processing**: The image is sent to the AI enhancement API
3. **Polling**: The app polls the API to check processing status
4. **Display**: Once complete, both original and enhanced images are displayed side-by-side
5. **Download**: Users can download the enhanced version

## API Integration

The application uses an external image enhancement API. The API workflow:

1. Upload image to `/api/tasks/visual/scale` endpoint
2. Receive a task ID
3. Poll the task status until completion (max 20 retries)
4. Retrieve the enhanced image URL

## Configuration

### Tailwind CSS

Tailwind is configured in [tailwind.config.js](tailwind.config.js). Customize theme, colors, and plugins as needed.

### Vite

Vite configuration can be modified in [vite.config.js](vite.config.js) to adjust build settings, plugins, and server options.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

Developed by [@vanshtambi](https://github.com/vanshtambi)

## Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

Made with ❤️ using React and Vite
