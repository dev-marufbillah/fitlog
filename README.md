<div align="center">

# 🏋️ FITLOG

### Train with intent. Log every set.

A dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.

[Live Demo](https://your-live-link.vercel.app) · [Report Bug](https://github.com/dev-marufbillah/fitlog/issues)

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>

---

## 📖 About

FitLog is a workout library and daily planner built with Next.js. Browse twelve lifts covering every major muscle group, open a workout to see its full details, then add it to today's plan or save it for later. Your plan and saved list stay on your device even after a reload.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Next.js (App Router) | UI and page routing |
| React | Component-based interface and state |
| Tailwind CSS | Styling and responsive design |
| Lucide React | Icons |
| React Hot Toast | Toast notifications |
| localStorage | Saving plan and saved data in the browser |

## ✨ Key Features

1. **Workout Library:** twelve workout cards with image, muscle tags, equipment and stats, loaded from an API with a loading animation.
2. **Sort By:** sort the library and plan lists by Duration, Calories or Rating.
3. **Workout Details:** two-column page with a specs panel, step-by-step instructions, and Add to today's plan / Save for later buttons.
4. **My Plan:** live Exercises, Minutes and Calories totals, Today's Plan and Saved tabs, Mark as Done and Remove actions with toast feedback.
5. **Persistent and Responsive:** data survives a page reload through localStorage, the plan is capped at five lifts, and the layout works on mobile, tablet and desktop.

## 🚀 Getting Started

```bash
git clone https://github.com/dev-marufbillah/fitlog.git
cd fitlog
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure