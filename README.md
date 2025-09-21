## React Dashboard

A fully responsive React-based admin dashboard built to replicate provided Figma designs with **pixel-perfect accuracy**. The dashboard supports real-time data visualization, interactive components, and both dark and light themes.
## Appendix

Any additional information goes here

1. **Overview**

2. **Features**

3. **Technologies Used**

4. **Project Structure**

5. **Installation**

6. **Usage**

7. **Notes**

8. **Dependencies**
## Overview

 React Dashboard is a modern, production-quality dashboard designed for enterprise use. The project emphasizes:

**Pixel-perfect implementation**: All UI components match Figma designs exactly.

**Responsive design**: Works seamlessly across desktop, tablet, and mobile breakpoints.

**Efficient rendering**: Minimal DOM manipulations and optimized state management.

**Advanced interactivity**: Smooth animations, microinteractions, and intuitive navigation.

**Real-time functionalities**: Filtering, searching, sorting, and pagination implemented in tables and charts.


## Features

Fully responsive layout using Tailwind CSS.

- Dark and light theme toggle with persistent theme state via localStorage.

- Interactive sidebar with expandable menu items and tabs for quick access.

- Topbar with search input, notifications, and user interactions.

- Right-side panel for notifications, activities, and contacts.

**Dashboard widgets:**

+ Key metrics cards

- Projections vs actuals charts

- Revenue by location (world map with bar indicators)

- Top selling products table

- Total sales donut chart

**Orders management page with:**

- Fully sortable, filterable, and paginated orders table

- Real-time status indicators and colored tags

- **Performance optimizations:** Lazy loading and memoized components to reduce re-renders.

## Tech Stack

- **React 19** — Component-based architecture.

- **React Router** — Client-side routing.

- **Tailwind CSS** — Utility-first styling.

- **Recharts** — Charts and data visualization.

- **React Context API** — Theme and global state management.

- **Leaflet** — Interactive maps for revenue by location.

- **JavaScript (ES6+)** — Modern JS syntax and patterns.
## Project Structure

src/
│
├─ assets/           # Images, icons, and logos
├─ components/       # Reusable components (Dashboard, Sidebar, Topbar, RightPanel, Charts)
├─ context/          # ThemeContext and other global providers
├─ data/             # Sample data for orders, menu items, charts
├─ pages/            # Page-level components (DashboardPage, OrdersPage)
├─ App.jsx           # Main app with routing
├─ index.css         # Tailwind and custom styles
└─ main.jsx          # ReactDOM rendering and ThemeProvider
## Installation

1. Install my-project with npm

```bash
  git clone https://github.com/harithaa-srii/react-dashboard.git
  cd react-dashboard
```
2. Install Dependencies

```bash
  npm install 
```
3. Start development server
```bash
  npm run dev
```
4. Open in browser
 ## Navigate to http://localhost:5173
    
## Usage
## Sidebar 

```javascript
import Sidebar from './components/dashboard/Sidebar';
import DashboardContent from './components/dashboard/DashboardContent';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Sidebar />
      <DashboardContent />
    </Router>
  );
}

export default App;

```
## Usage Notes:

**Quick Access Tabs:**
Switch between “Favorites” or “Recently” accessed items at the top of the sidebar.

**Menu Sections:**
Navigate to different pages using the sidebar menu. Nested items expand/collapse as needed.

**Active Highlight:**
The currently selected route is automatically highlighted for better user experience.

**Responsive & Accessible:**
Sidebar can collapse on mobile screens with a toggle button.

## Theme 

```javascript
import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}


```
- Components automatically adapt to the current theme.

- Theme preference is persisted in localStorage.

- Toggle updates the theme dynamically without page reload.

## Interact with Dashboard Charts to View Real-Time Data Insights
The **DashboardContent** component combines multiple real-time widgets: stats, charts, tables, and cards. It is theme-aware, responsive, and supports navigation interactions.

```javascript
import { DashboardContent } from './components/dashboard/DashboardContent';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      {/* Main dashboard wrapper */}
      <DashboardContent />
    </ThemeProvider>
  );
}

```

1. **Loading & Navigation**
```javascript
const [loading, setLoading] = useState(false);
const handleOrderClick = () => {
  setLoading(true);
  // simulate async navigation
  setTimeout(() => {
    setLoading(false);
    navigate("/orders");
  }, 1000);
};

```
- Shows a loading overlay (LoaderBackdrop) during async actions.

- Supports smooth navigation on interactive elements like stats cards.

2. **Stats Overview**
```javascript
<StatCard label="Customers" value="3,781" change="+11.01%" positive highlight />
<StatCard label="Orders" value="1,219" onClick={handleOrderClick} clickable />
<StatCard label="Revenue" value="$695" change="+15.03%" positive />
<StatCard label="Growth" value="30.1%" change="+6.08%" positive highlight />

```
- Displays key KPIs with percentage changes.

- Cards are interactive and can trigger detailed views.
3. **Interactive Charts**
```javascript
<ProjectionsVsActualsChart />   // Forecast vs Actuals
<RevenueLineChart />             // Revenue trends over time
<RevenueByLocation />            // Geographical revenue distribution
<TotalSalesDonutChart />        // Breakdown by sales channel

```
## Summary:
- Interactive stats cards with actionable events

- Multiple charts for trend analysis and channel insights

- Tables for detailed product or order data

- Full theme support and responsive design

- Real-time updates and asynchronous data handling
# Notes
## Pixel-Perfect Design

- All UI components follow Figma specifications exactly (spacing, typography, colors, alignment).

- Layouts are consistent across desktop, tablet, and mobile breakpoints.

## Theme-Aware Components

- Fully supports light and dark themes via ThemeProvider.

- Components automatically adapt colors, shadows, and text styles to the current theme.

## Interactive & Real-Time Charts

- Charts (ProjectionsVsActualsChart, RevenueLineChart, RevenueByLocation, TotalSalesDonutChart) update dynamically with live data.

- Hover, click, and tooltip interactions provide instant insights without page reload.

## Reusable & Modular Components

- Components like Card, StatCard, OrdersTable, and charts are modular and reusable, following the DRY principle.

- Promotes maintainability and allows easy extension for new dashboard widgets.

## Smooth Animations & Microinteractions

- Transitions, hover effects, and toggle animations are smooth and lightweight.

- Enhances UX without causing jank or frame drops.

## Responsive Layouts

- Uses Tailwind CSS grid system for flexible, responsive layouts.

- Components automatically adjust to different screen sizes.


## Performance Optimizations

- Charts and tables handle large datasets efficiently.

- Loader (LoaderBackdrop) ensures smooth UX during async data fetching or navigation.


## Cross-Browser Compatibility

- Tested and fully compatible with Chrome, Edge, Firefox, and Safari.

## State Management

- Lightweight use of React state and Context API for theme and real-time data.

- Ready to integrate Redux or other state libraries for more complex dashboards.

## Code Quality & Best Practices

- Meaningful variable and component names, clean folder structure.

- Proper separation of UI, logic, and data-fetching layers.

- Comments and documentation included where necessary for maintainability.

## Integration Ready

- Components can be easily integrated into existing React applications.

- Works seamlessly with react-router-dom for navigation and routing.
## Dependencies
```javascript
{
  "name": "react-dashboard",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@fontsource/inter": "^5.2.8",
    "@heroicons/react": "^2.2.0",
    "classnames": "^2.5.1",
    "leaflet": "^1.9.4",
    "lucide-react": "^0.544.0",
    "prop-types": "^15.8.1",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-icons": "^5.5.0",
    "react-is": "^19.1.1",
    "react-leaflet": "^5.0.0",
    "react-router-dom": "^7.9.1",
    "react-simple-maps": "^1.0.0",
    "recharts": "^3.2.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.35.0",
    "@tailwindcss/postcss": "^4.1.13",
    "@types/react": "^19.1.13",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.2",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.35.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^16.4.0",
    "postcss": "^8.5.6",
    "tailwindcss": "^4.1.13",
    "vite": "^7.1.6",
    "vite-plugin-svgr": "^4.5.0"
  }
}
```
## Screenshots

