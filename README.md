# 🤖 AI Code Reviewer & Bot Assistant

An intelligent, AI-powered code review tool that provides comprehensive code analysis, optimization suggestions, and best practice recommendations. Built with Google Gemini AI, this application helps developers write cleaner, more efficient, and maintainable code.

## ✨ Features

- **Intelligent Code Analysis**: Get detailed reviews of your code with expert-level insights
- **Performance Optimization**: Identify bottlenecks and suggest efficiency improvements
- **Best Practices**: Receive recommendations following industry-standard coding practices
- **Security Detection**: Spot potential vulnerabilities and security risks
- **Code Quality Assessment**: Evaluate code structure, readability, and maintainability
- **Real-time Feedback**: Instant AI-powered reviews with markdown-formatted responses
- **Modern UI**: Beautiful, responsive interface with syntax highlighting
- **Error Handling**: Comprehensive error detection and bug identification
- **Scalability Advice**: Get suggestions for making code adaptable for future growth

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Prism.js** - Syntax highlighting
- **React Markdown** - Markdown rendering
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express 5** - Web framework
- **Google Generative AI (Gemini 2.0 Flash)** - AI model for code review
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** (v7 or higher) or **yarn**
- **Google Gemini API Key** ([Get one here](https://makersuite.google.com/app/apikey))

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd TheAiReviewer
   ```

2. **Install Backend Dependencies**
   ```bash
   cd Backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../Frontend
   npm install
   ```

## ⚙️ Configuration

1. **Backend Environment Setup**
   
   Create a `.env` file in the `Backend` directory:
   ```bash
   cd Backend
   touch .env
   ```
   
   Add your Google Gemini API key:
   ```env
   GOOGLE_GEMINI_KEY=your_api_key_here
   ```

2. **Frontend Configuration**
   
   The frontend is configured to connect to `http://localhost:3000` by default. If you need to change the backend URL, update the API endpoint in `Frontend/src/App.jsx`.

## 🎯 Usage

### Starting the Backend Server

```bash
cd Backend
node server.js
```

The server will start on `http://localhost:3000`

### Starting the Frontend Development Server

```bash
cd Frontend
npm run dev
```

The frontend will be available at `http://localhost:5173` (or the port Vite assigns)

### Using the Application

1. Open your browser and navigate to the frontend URL
2. Enter your code in the left panel (code editor)
3. Click the **"Review Code or Ask Question"** button
4. View the AI-generated review in the right panel
5. The review includes:
   - Code quality assessment
   - Performance suggestions
   - Security recommendations
   - Best practice improvements
   - Refactored code examples


## 🎨 Features in Detail

### Code Review Capabilities

The AI reviewer analyzes code for:
- ✅ **Code Quality**: Clean, maintainable, and well-structured code
- ✅ **Best Practices**: Industry-standard coding practices
- ✅ **Performance**: Execution time and resource usage optimization
- ✅ **Error Detection**: Potential bugs, security risks, and logical flaws
- ✅ **Scalability**: Adaptability for future growth
- ✅ **Readability**: Code clarity and maintainability
- ✅ **Security**: Common vulnerabilities (SQL injection, XSS, CSRF)
- ✅ **DRY & SOLID Principles**: Code duplication reduction and modular design
- ✅ **Documentation**: Meaningful comments and docstrings

## 🔒 Security Notes

- Never commit your `.env` file to version control
- Keep your Google Gemini API key secure
- The `.env` file is already included in `.gitignore`

## 🐛 Troubleshooting

### Backend Issues
- **Port already in use**: Change the port in `Backend/server.js`
- **API key error**: Verify your `.env` file has the correct `GOOGLE_GEMINI_KEY`
- **CORS errors**: Ensure CORS is properly configured in `Backend/src/app.js`

### Frontend Issues
- **Cannot connect to backend**: Verify the backend is running on port 3000
- **Build errors**: Clear `node_modules` and reinstall dependencies

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Google Gemini AI** for providing the powerful AI model
- **React** and **Express** communities for excellent documentation
- All contributors who help improve this project

## 📧 Support

For issues, questions, or suggestions, please open an issue on the GitHub repository.

---

**Built with ❤️ using AI to make code better, one review at a time.**
