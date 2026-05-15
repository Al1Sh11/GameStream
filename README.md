# 🎮 GameStream

A gaming e-commerce aggregator built with React.js— a centralized hub for discovering games and gaming equipment across Steam, Xbox, PlayStation, and Nintendo.

Owners:Ali Shaer & Sajid Ghandour ,THIS TIME MADE ONLY BY ALI SHAER| Course: CSCI390 – Web Programming (Phase 2)
To be Honest the file structure below was  made by chatgpt since i want able to create the easy read feel, other than that all other work is original with some help from youtube
## File Structure

```
src/
├── App.jsx              ← Main router (React Router v6)
├── App.css              ← All consolidated CSS styles
├── main.jsx             ← React entry point
├── components/
│   ├── Navbar.jsx       ← Shared sticky glassmorphism navbar
│   └── Footer.jsx       ← Shared footer
└── pages/
    ├── Home.jsx         ← Landing page
    ├── Steam.jsx        ← Steam platform
    ├── Xbox.jsx         ← Xbox platform
    ├── PlayStation.jsx  ← PlayStation platform
    ├── Nintendo.jsx     ← Nintendo platform
    ├── Equipment.jsx    ← Gaming accessories
    └── Login.jsx        ← Animated login page
```

## Setup Instructions

```bash
git clone https://github.com/YOUR_USERNAME/gamestream.git
cd gamestream
npm install
npm run dev
```

Open http://localhost:5173

## Tech Stack

- React 18 + React Router v6
- Vite (build tool)
- Pure CSS3 (glassmorphism, keyframe animations, CSS Grid/Flexbox)
