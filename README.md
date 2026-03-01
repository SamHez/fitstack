# FitStack – Fitness Tracker App

A React + Tailwind CSS fitness tracker app built as an ALX Frontend Capstone Project.

## Tech Stack
- **React 18** (via Vite)
- **Tailwind CSS v3** (with custom brand colors and Inter font)
- **WGER REST API** – public workout/exercise data

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Top nav with liquid glass effect + logo
│   ├── WorkoutForm.jsx     # Form to log workouts (Week 2+)
│   ├── WorkoutList.jsx     # List of workouts (Week 2+)
│   ├── WorkoutCard.jsx     # Individual workout card (Week 2+)
│   ├── ProgressSummary.jsx # Progress stats (Week 2+)
│   └── Footer.jsx          # Footer with WGER attribution
├── pages/
│   ├── Home.jsx            # Landing/dashboard page
│   ├── AddWorkout.jsx      # Add a new workout page
│   └── History.jsx         # Workout history page
├── services/
│   └── api.js              # WGER API service + Week 1 test
├── App.jsx
└── main.jsx
```

## WGER API Test (Week 1)

On app load, `src/services/api.js` calls:
- `GET https://wger.de/api/v2/exercise/` – lists exercises in English
- `GET https://wger.de/api/v2/muscle/` – lists muscle groups

Open the browser console to see the fetched data logged.  
**No API key required** – WGER's public API is open.

## Getting Started

```bash
npm install
npm run dev
```

## Week 1 Commits
1. `initialize vite project`
2. `install tailwind and configure`
3. `create basic folder structure`
4. `test wger api connection`
