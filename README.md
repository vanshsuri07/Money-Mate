# 💰 MoneyMate – Expense Tracker

MoneyMate is a **full-stack expense tracking application** built with the **MERN stack** (MongoDB, Express.js, React, Node.js).  
It allows users to **track income and expenses**, visualize financial data, and manage budgets effectively.

---

## 🚀 Features
- **User Authentication** – Secure login & registration with JWT.
- **Dashboard Overview** – See total income, expenses, and balance.
- **Income Management** – Add, view, delete, and download income records.
- **Expense Management** – Add, view, delete, and download expense records.
- **File Upload** – Upload a profile image.
- **Responsive Design** – Works on desktop and mobile devices.
- **Excel Export** – Download income & expense data as Excel files.
- **Modern UI** – Clean and user-friendly interface.

---

## 🛠️ Tech Stack
### **Frontend**
- React.js (Vite)
- Tailwind CSS
- Axios

### **Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)
- Multer (for file uploads)
- JWT Authentication
- dotenv for environment variables

---

## 📂 Folder Structure

money-mate/

├── backend/ # Express API (Server)

│ ├── models/ # Mongoose models

│ ├── routes/ # API routes

│ ├── controllers/ # Request handlers 

│ ├── middleware/ # Auth & other middleware

│ ├── server.js

│ └── ...

├── frontend/ # React application

│ ├── src/

│ │ ├── components/ # UI components

│ │ ├── pages/ # Page views

│ │ ├── constants/ # API paths & config

│ │ └── App.jsx

│ └── ...

│

└── README.md



---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/vanshsuri07/Money-Mate.git
cd money-mate
```

### 2️⃣ Install dependencies

Backend:
```
cd ./backend
npm install
```

Frontend:
```
cd ./frontend
npm install
```

### 3️⃣ Create environment files
Backend .env
```
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Frontend .env.development
```
VITE_BASE_URL=http://localhost:8000
```
Frontend .env.production
```
VITE_BASE_URL=https://your-backend-service.onrender.com
```

### 4️⃣ Run the application

Backend:
```
cd ./backend
npm start
```

Frontend:
```
cd ./frontend
npm run dev
```

## 🌐 Deployment
### Backend (Render)

- Service Type: Web Service

- Root Directory: backend

- Build Command: npm install

- Start Command: npm start

### Frontend (Render)

- Root Directory: frontend

- Build Command: npm install && npm run build

[🔗 Live Demo] https://money-mate-1-9vqe.onrender.com


## 🤝 Contributing

Contributions are welcome!

1. Fork the repo

2. Create a new branch (feature/your-feature)

3. Commit changes

4. Push & create a PR


## 📜 License

This project is licensed under the MIT License – feel free to use and modify for your own projects.


## 👨‍💻 Author

Your Name

GitHub: [@vanshsuri07](https://github.com/vanshsuri07)


LinkedIn: [@vanshsuri007](https://www.linkedin.com/in/vanshsuri007/)


