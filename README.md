# 🍽️ Party Menu Selection App

## 📖 Overview 
The app allows users to browse dishes, filter them by categories, search, apply Veg/Non-Veg filters, view dish ingredients, and select dishes for their party menu.

---

## 🎨 Figma Design
You can check the original design reference here:  
👉 [Figma Design Link](https://www.figma.com/design/j7VAQnzrL435tnYiQP1bac/React-Native-Assignment?node-id=0-1&t=Ido2BfnGCEFnXvPT-1)

---

## 🚀 Features
- 📌 **Menu Categories** – Starter, Main Course, Dessert, Sides (tab-based navigation).
- 🍲 **Dish List** – Card with dish name, description, image, Add/Remove button, and Ingredients button.
- 🔎 **Search** – Case-insensitive search by dish name.
- 🥦 **Veg / Non-Veg Filter** – Toggle between Veg & Non-Veg dishes.
- 📊 **Dish Selection Summary** – Selected count per category and overall.
- 📋 **Ingredient Modal** – Dish details with ingredient list & quantities.

---

## 🛠️ Tech Stack
- ReactJS (Hooks + Functional Components)
- React Icons
- CSS (Flexbox & Grid)
- Mock JSON Data

---

## 📂 Project Structure
```
party-menu-app/
├── src/
├── components
│   ├── components/
│   │   ├── DishCard.js
|   |   ├── DishCard.css
│   │   ├── DishList.js
|   |   ├── DishList.css
│   │   ├── Filters.js
|   |   ├── Filters.css
|   |   ├── IngredientModal.js
│   │   └── IngredientModal.css
│   ├── data/
|   |   ├── imageMap.js
│   │   └── mockDishes.js
│   ├── App.css
│   └── App.js
└── README.md
```

---

## ⚙️ Installation & Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/party-menu-app.git
   cd party-menu-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open in browser:
   ```
   http://localhost:3000
   ```

---

## 🖼️ Screenshots / Preview
| Dish List | Dish Card | Ingredient Modal |
|-----------|-----------|------------------|
| <img src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1757761475/Screenshot_2025-09-13_163144_wefu7g.png" /> |  <img src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1757762245/Screenshot_2025-09-13_164710_bmz1rr.png" /> |  <img src="https://res.cloudinary.com/dq1ktqbtb/image/upload/v1757761476/Screenshot_2025-09-13_163156_npxu7g.png" /> |


---

## ✅ Deliverables
- Functional ReactJS app with:
  - Category-based dish listing
  - Search & Veg/Non-Veg filters
  - Add/Remove functionality
  - Dish selection summary
  - Ingredient modal
- Public GitHub Repository
- Reference design linked via Figma

---

## 🏆 Assignment Purpose
This project demonstrates:
- ReactJS fundamentals (components, props, state, hooks)
- Filtering, searching, conditional rendering
- Component-driven architecture
- Clean UI/UX design
