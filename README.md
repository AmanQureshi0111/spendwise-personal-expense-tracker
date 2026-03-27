# Live - https://rebrand.ly/spendwise
# SpendWise — Personal Expense Tracker

SpendWise is a full‑stack personal finance tracker that helps users record income and expenses, visualize spending trends, and manage budgets in a clean, modern interface.

The project is split into a **React + Vite frontend** and a **Node.js/Express backend** with MongoDB, designed to demonstrate real‑world app architecture, authentication, and financial analytics.

---

## Features

- User authentication (JWT-based)
- Add and track income & expenses
- Dashboard analytics and summaries
- Responsive UI with charts
- RESTful API backend

---

## Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS
- Recharts (data visualizations)
- Axios

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- JWT authentication
- Validation utilities

---

## Project Structure

```
spendwise-personal-expense-tracker/
├─ backend/
│  ├─ config/           # DB and app configuration
│  ├─ controllers/      # Request handlers
│  ├─ middleware/       # Auth & validation middlewares
│  ├─ models/           # Mongoose schemas
│  ├─ routes/           # API routes
│  ├─ utils/            # Utility helpers
│  ├─ server.js         # Express entry point
│  └─ package.json
├─ frontend/
│  ├─ public/
│  ├─ src/              # React app source
│  ├─ index.html
│  ├─ vite.config.js
│  └─ package.json
└─ README.md
```

## Future Work

- **NLP-based spending summaries**  
  Generate monthly/weekly summaries using NLP, e.g.  
  “You spent 18% more on food this month, mainly on weekends.”

- Automated financial insights & smart budgeting suggestions

- Export reports in PDF/CSV

---

## License

This project is for educational/demo purposes.
