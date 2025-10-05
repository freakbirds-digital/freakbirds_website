# FreakBrids Backend (Node.js / Express)

This repository provides a simple backend for the Vite + React frontend you uploaded.

Features:
- Express server (ES modules)
- SQLite database with simple `users`, `site_meta`, and `portfolio` tables
- Auth endpoints: POST /api/auth/register, POST /api/auth/login
- Public endpoints:
  - GET /api/site
  - GET /api/portfolio
  - POST /api/contact  (sends email via nodemailer)
  - POST /api/upload   (multipart form-data; field name `file`)
- Static file serving: place your frontend build into the `public/` folder (or change path in server.js)

Quick start:

1. Copy this backend folder to your machine.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and set values.
4. Initialize the database:
   ```bash
   npm run migrate
   ```
5. Start development server:
   ```bash
   npm run dev
   ```
6. Build your frontend with Vite and copy the `dist` contents into `public/`.
7. Open `http://localhost:4000`

Notes:
- For production, use a proper SMTP provider and secure JWT_SECRET.
- The `uploads/` folder is used for uploaded images; serve it via CDN or static file middleware if needed.

