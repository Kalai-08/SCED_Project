# SCED Project — Task Management App

A full-stack task management app with JWT authentication and email reminders.

## Tech Stack

- **Frontend**: React + Vite + Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: MySQL

## Features

- User Signup / Login (JWT Auth)
- Create, View, Update, Delete Tasks
- Email Reminders via Nodemailer
- Scheduled Reminders using node-cron

## Project Structure

```
SCED_Project/
├── backend/
│   ├── config/         → MySQL connection
│   ├── controllers/    → Auth & Todo logic
│   ├── middleware/     → JWT Auth middleware
│   ├── routes/         → API routes
│   ├── services/       → Email & Reminder scheduler
│   └── server.js       → Entry point
├── frontend/
│   └── src/
│       ├── components/ → Reusable UI components
│       ├── pages/      → Login, Signup, Tasks
│       ├── context/    → App state (Context API)
│       └── services/   → Axios API calls
└── db/
    └── database_schema.sql
```

## Getting Started

### Backend
```bash
cd backend
cp .env.example .env
npm install
npm start
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Create `backend/.env` using `backend/.env.example` as reference:

| Variable | Description |
|---|---|
| `PORT` | Server port (default: 5000) |
| `MYSQL_HOST` | MySQL host |
| `MYSQL_USER` | MySQL username |
| `MYSQL_PASSWORD` | MySQL password |
| `MYSQL_DATABASE` | Database name |
| `JWT_SECRET` | Secret key for JWT tokens |
| `EMAIL_USER` | Gmail address for sending reminders |
| `EMAIL_PASS` | Gmail App Password |
| `TZ` | Timezone (e.g. Asia/Colombo) |
| `REMINDER_CRON` | Cron schedule for reminders |