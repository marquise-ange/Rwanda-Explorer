
# IMBERE – Opportunities Explorer

IMBERE is a responsive React web application that helps users discover, explore, save, and add opportunities such as workshops, courses, career events, and community activities.

The platform provides a simple and organized way to explore opportunities available in different cities across Rwanda.

## Project Overview

IMBERE was developed as a React frontend project using reusable components, React Hooks, props, conditional rendering, and Tailwind CSS.

The application focuses on providing a clean, accessible, and responsive user experience.

## Features

- **Browse Opportunities:** Explore different workshops, courses, career events, and community activities.
- **Search:** Search opportunities by title or city.
- **Category Filtering:** Filter opportunities by category.
- **Availability Filtering:** Display opportunities with available seats.
- **Saved Opportunities:** Save and unsave opportunities.
- **Saved Only Filter:** View only saved opportunities.
- **Sorting:** Sort opportunities by date, title, or available seats.
- **Add Opportunities:** Submit new opportunities using a controlled form.
- **Form Validation:** Validate required fields, dates, capacity, and prices.
- **Loading State:** Display a loading interface while preparing opportunity data.
- **Error Handling:** Display an error message and retry option if loading fails.
- **Responsive Design:** Support desktop, tablet, and mobile screens.

## Technologies Used

- React
- JavaScript (ES6+)
- Vite
- Tailwind CSS v4
- HTML5
- CSS3
- Git and GitHub

## Project Structure

```text
rwanda-opportunities-explorer/
│
├── public/
│
├── src/
│   ├── Components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Opportunities.jsx
│   │   ├── OpportunityCard.jsx
│   │   └── OpportunityForm.jsx
│   │
│   ├── data/
│   │   └── Dataopportunities.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the project folder

```bash
cd rwanda-opportunities-explorer
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## How to Use

1. Open the IMBERE application.
2. Explore opportunities on the Opportunities section.
3. Use the search field to find opportunities by title or city.
4. Filter opportunities by category and availability.
5. Save opportunities you are interested in.
6. Use the Saved Only filter to view your saved opportunities.
7. Sort opportunities according to your preference.
8. Use the Add Opportunity form to submit a new opportunity.

## Learning Objectives

This project demonstrates practical use of:

- React function components.
- JSX and reusable components.
- Props for passing data between components.
- React `useState` for managing application state.
- React `useEffect` for handling side effects.
- Array methods such as `map()`, `filter()`, and `sort()`.
- Conditional rendering.
- Controlled forms and validation.
- Responsive styling with Tailwind CSS.

## Data and Application Scope

IMBERE currently uses locally stored sample opportunity data.

It is a frontend-only application and does not currently use a backend, database, or external API. Newly added opportunities and saved selections are maintained in React state during the current application session.

