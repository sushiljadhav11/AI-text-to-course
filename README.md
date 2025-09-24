📚 Text-to-Learn: AI-Powered Course Generator

An AI-powered web app that converts any text/topic into a structured online course with modules, lessons, quizzes, and resources.
Built during Hackathon 2025 by Team Conqueror.

✨ Features

📝 Generate structured courses from a single text/topic.

📖 Lessons include text, code, videos, and quizzes.

🌐 Multilingual support with Hinglish audio/text.

📂 Save & revisit generated courses with Auth0 login.

📥 Download lessons as PDFs for offline study.

📂 Project Structure
AI-text-to-course/
├── client/                 # Frontend (HTML, CSS, JavaScript)
│   ├── index.html          # Main entry point
│   ├── styles/             # CSS styles
│   ├── scripts/            # JavaScript logic
│   └── assets/             # Images, icons, etc.
└── server/                 # Node.js + Express Backend
    ├── routes/             # API endpoints
    ├── controllers/        # Business logic
    ├── models/             # MongoDB schemas
    ├── services/           # AI/YouTube integrations
    └── ...

⚙️ Installation & Setup
1. Clone the Repository
git clone https://github.com/sushiljadhav11/AI-text-to-course.git
cd AI-text-to-course

2. Backend Setup
cd server
npm install


Create .env:

PORT=5000
MONGO_URI=your_mongodb_connection_string
AUTH0_ISSUER=https://your-auth0-domain.auth0.com/
AUTH0_AUDIENCE=your-api-identifier
GEMINI_API_KEY=your-google-genai-key
YOUTUBE_API_KEY=your-youtube-data-api-key


Run:

npm run start

3. Frontend Setup

Simply open client/index.html in a browser, or serve the folder using any static server (e.g., Live Server in VS Code).

🌐 Deployment

Frontend: Deploy client/ on Vercel
 or GitHub Pages

Backend: Deploy server/ on Render

👨‍💻 Team Conqueror

Sushil Jadhav

Pranav Deshmukh

Ishan Mukkannavar

Pune Institute of Computer Technology, Pune

📜 License

This project is licensed under the MIT License.
