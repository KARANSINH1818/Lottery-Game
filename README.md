# 🎰 Lottery Game -  with Best Score Tracking (React + MUI)

[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Build%20Tool-purple?logo=vite)](https://vitejs.dev/)
[![MUI](https://img.shields.io/badge/MUI-Material%20UI-007FFF?logo=mui)](https://mui.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-black?logo=github)](https://pages.github.com/)


An interactive and modern Lottery Game built with React.  
This application generates a random 5-digit ticket, checks for a winning condition, tracks total attempts, and stores the best score using LocalStorage.

Clean UI. Smooth animations. Modern React Hooks.

---

## 🌐 Live Demo

🔗 https://karansinh1818.github.io/Lottery-Game/

---

## 🚀 Live Deployment

🔗 https://todo-app-seven-silk-13.vercel.app/
---

## 🚀 Features

- 🎟 Random 5-digit lottery ticket generation
- ➕ Automatic sum calculation
- 🏆 Winning condition when sum equals 15
- 🔢 Attempt counter tracking
- 💾 Best Score saved using LocalStorage
- ✨ Animated winner badge
- 🎨 Modern UI with hover effects
- ⚛ Built using React Hooks (useState, useEffect)
- 📱 Responsive centered layout
- 🔄 Reset Game Button (resets ticket & attempts without refreshing page)

---

## 🛠 Tech Stack

- React.js
- JavaScript (ES6+)
- CSS3 (Flexbox, Animations, Hover Effects)
- LocalStorage 
- Material UI
- Vite
- HTML5
- CSS3  
- JavaScript (ES6+)  
---

# 📦 Installation & Setup

## 🔹 Create Project

npm create vite@latest lottery-game  
cd lottery-game  
npm install  
npm install @mui/material @emotion/react @emotion/styled  

## 🔹 Run Development Server

npm run dev  

Open in browser:

http://localhost:5173/

## 🔹 Build for Production

npm run build  

---

# 🚀 Deploy to GitHub Pages

## Install gh-pages

npm install gh-pages --save-dev  

## Update vite.config.js

import { defineConfig } from 'vite'

export default defineConfig({
  base: "/lottery-game/",
})

## Update package.json scripts

"predeploy": "npm run build",  
"deploy": "gh-pages -d dist"

Then run:

npm run deploy  

---


## 🧠 How It Works

1. The app generates 5 random numbers between 0–9.
2. It calculates the total sum of the numbers.
3. If the sum equals 15, the user wins.
4. The app tracks how many attempts were needed.
5. If the new attempt count is lower than the saved best score, it updates LocalStorage automatically.

Best Score remains saved even after refreshing the page.

---

## 🎯 Future Improvements

- 🎊 Confetti animation on winning
- 🔊 Winning sound effect
- 🎰 Auto-play mode
- 🌙 Dark / Light theme toggle
- 📊 Difficulty levels
- 📱 Enhanced mobile optimization

---

## 👨‍💻 Author

**Karansinh Mori**  
Frontend Developer 🚀 

---

## ⭐ Support

If you like this project, feel free to give it a star ⭐ on GitHub!

---
