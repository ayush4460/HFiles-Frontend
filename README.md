🖥️ Medical Dashboard – Frontend

This is the frontend for the Mini Medical Record Dashboard, built with Next.js 13+, Tailwind CSS, and TypeScript. It connects to an ASP.NET Core backend API for user management and file operations.

🔧 Local Setup

1. Clone the Repository

git clone https://github.com/yourusername/medical-dashboard-frontend.git
cd medical-dashboard-frontend

2. Install Dependencies

npm install

3. Run the App

npm run dev

The app will be available at http://localhost:3000

Make sure your backend is running at http://localhost:5138 (or update API URL accordingly).

🧩 Features

🔐 Login and Signup with session support

👤 User profile with editable fields

📤 Upload PDF/image medical records

📁 View/delete uploaded files

📦 Responsive card layout using Tailwind

🔄 Logout and protected dashboard via useAuth hook


🧪 File Structure
frontend/
├── app/
│   ├── login/        # Login page
│   ├── signup/       # Signup page
│   ├── dashboard/    # Dashboard UI
├── components/       # UI components (ProfileCard, FileList, UploadForm)
├── utils/            # useAuth (session check)
├── public/           # Avatar, static files
