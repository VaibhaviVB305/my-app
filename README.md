# Product Comparison App

An interactive and responsive product comparison interface built using **React** and **Bootstrap 5**. Users can browse a list of products and compare up to 3 of them side-by-side with a toggleable dark/light theme.

---

## Features

- Responsive product grid layout (phones, laptops, tablets)
- Compare up to **3 products** side-by-side
- "Add to Compare" and "Remove from Compare" buttons
- Differences between features are clearly highlighted
- **Theme switcher** (Light/Dark) using Bootstrap switch
- Preference saved in **localStorage**
- Fully built with **React functional components + Bootstrap CSS**
- No 3rd-party component libraries (e.g., no ShadCN, Tailwind, or Material UI)

---

## Setup Instructions

> Make sure you have **Node.js** and **npm** installed.

1. **Clone this repository:**
git clone https://github.com/your-username/product-comparison-app.git
cd product-comparison-app

2. Install dependencies
npm install

3. Start the development server
npm start

4. Open in browser
Go to http://localhost:3000

**Assumptions:**
The app compares general tech products like phones, tablets, and laptops.
Feature differences are parsed from strings like "Battery: 24h" by comparing the keys.
Only basic product attributes (name, brand, price, features) are used.
Bootstrap’s theme is extended with a simple dark-mode CSS class override.
