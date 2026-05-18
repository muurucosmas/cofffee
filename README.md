☕ BrewVerse Coffee App

A React-based coffee management system with full CRUD functionality, built using React, React Router, and JSON Server.

🚀 Features
🏠 Home page with product listing
🔍 Live search filtering
📦 Product details page (dynamic routing)
➕ Add new coffee products (form + POST request)
🧑‍💻 Admin dashboard (edit products in real time)
✏️ Update product data (PUT request)
🗑️ Delete products (optional feature)
🧭 Navigation with React Router
⚡ Global state management using Context API
🛠️ Tech Stack
React (Vite)
React Router DOM
JSON Server (fake backend)
Context API
Hooks (useState, useEffect, useContext, useRef, useId)
CSS / Tailwind (optional)
📁 Project Structure
src/
  components/
    NavBar.jsx

  pages/
    Home.jsx
    ProductPage.jsx
    ProductForm.jsx
    Dashboard.jsx

  context/
    ProductContext.jsx

  App.jsx
  main.jsx
📡 API Setup (JSON Server)
Install JSON Server
npm install -g json-server
Run server
json-server --watch db.json --port 4000
📦 API Endpoints
GET /products → fetch all products
GET /products/:id → fetch single product
POST /products → add product
PUT /products/:id → update product
DELETE /products/:id → remove product
▶️ Run Project
npm install
npm run dev
🧠 What I Learned
React routing (including dynamic routes)
CRUD operations with REST API
State management using Context API
Building admin dashboards
Handling real-time UI updates
📸 Screenshots (optional)

(Add images here later)

💡 Future Improvements
Authentication (admin login)
Better UI/UX design
Loading & error states
Pagination for products
Backend upgrade (Node/Express)
👨‍💻 Author

Built by a React developer learning full-stack frontend development 🚀