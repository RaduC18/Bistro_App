# Bistro App - Restaurant Platform

A modern, fast, and fully responsive web platform designed for restaurants and bistros. Built with **React**, **Vite**, and **Tailwind CSS**, this application features a clean and an intuitive user experience.

---

## Key Features

* **Interactive Menu Display:** A custom built menu view with smooth navigation sliders and pagination buttons.
* **Flexible Ordering System:** Integrated digital workflow allowing customers to seamlessly choose their preferred dining method:
  *  **Delivery**
  *  **Pickup**
  *  **Dine-in**
* **Direct Call Button:** A dedicated, one touch contact feature for instant phone inquiries and manual orders, completely separate from the digital checkout flow.
* **Custom Drag to Scroll Component:** An intuitive `FoodScroll` showcase utilizing mouse-event bindings (`onMouseDown`, `onMouseMove`) for a fluid gallery experience.

---

##  Tech Stack

* **Frontend Framework:** Reac
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **Routing:** React Router Dom (`createBrowserRouter` architecture)

---

## Project Structure Highlights

```text
src/
├── assets/             # Static images and media assets
├── components/         # Atomic and structural UI components
├── db/
│   └── db.js           # Centralized mock database for menu and team data
├── App.jsx             # App router definitions and shell configuration
└── index.css           # Application styling
└── index.jsx           # Application entry point
└── useHashScroll.js    # Custom hook
