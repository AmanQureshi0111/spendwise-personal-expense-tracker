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

## Learnings & Reflections

### What I Learned Through Building This Project

- **Full-stack integration** — Wiring a React frontend to a Node/Express REST API taught me how data flows end-to-end: from a user action in the browser, through an Axios request, to a controller, into MongoDB, and back as a rendered chart.
- **JWT authentication** — Implementing token-based auth (sign → store → attach to every request → verify on the server) gave me a solid mental model of stateless security and how middleware chains work in Express.
- **MongoDB schema design** — Deciding how to model transactions (income vs. expense, categories, dates) and embedding vs. referencing documents sharpened my understanding of document-oriented databases.
- **Data visualization** — Integrating Recharts and shaping raw transaction data into the aggregated form that charts expect was a great exercise in array manipulation and state management.
- **Tailwind CSS utility-first workflow** — After initial resistance, I came to appreciate how quickly a responsive, consistent UI can be built without leaving JSX.
- **Environment configuration & deployment** — Managing `.env` files, CORS settings, and deploying the two separate services reinforced best practices around secrets and production configuration.

### What I Enjoyed Most

The most satisfying part was seeing the **dashboard come to life** — when the first real chart rendered from actual database data, the whole project suddenly felt *real*. Building something that takes raw numbers and turns them into a visual story about your own spending habits made the technical effort feel immediately meaningful.

I also genuinely enjoyed the **authentication flow**. There is something rewarding about building a system where a user registers, logs in, and then every subsequent API call is silently protected by a token they don't even see — it felt like building invisible infrastructure.

---

## Future Work

- **NLP-based spending summaries**  
  Generate monthly/weekly summaries using NLP, e.g.  
  “You spent 18% more on food this month, mainly on weekends.”

- Automated financial insights & smart budgeting suggestions

- Export reports in PDF/CSV

---

## License

This project is for educational/demo purposes.
