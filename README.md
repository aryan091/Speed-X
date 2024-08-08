# Speed X - Website Performance Analyzer

## Overview

Speed X is a comprehensive web application designed to analyze and provide insights into the performance metrics of a given website. Built using React.js and Node.js, Speed X leverages Google's PageSpeed Insights API to provide detailed metrics such as First Contentful Paint, Largest Contentful Paint, Total Blocking Time, and more.

## Features

- **Analyze Website Performance :** Get detailed insights into various performance metrics for any given URL.
- **Real-Time Loading Indicator :** Displays a loading spinner while fetching data from the PageSpeed Insights API.
- **Performance Summary:** View a summary of key performance metrics in a clean, user-friendly interface.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Prerequisites

- **Frontend:**
Node.js (>= 14.x)
npm (>= 6.x) or yarn (>= 1.x)
- **Backend:**
Express.js
PageSpeed Insights API Key

## Getting Started

1. **Clone the repository:**

```
git clone https://github.com/aryan091/Speed-X.git
cd Speed-X/client
```

2. **Install dependencies:**

```
# Using npm
npm install

# Or using yarn
yarn install
```

3. **Run the development server:**

```
# Using npm
npm run dev

# Or using yarn
yarn run dev
```

The app will be available at `http://localhost:PORT`.

## Backend Setup

1. **Navigate to the Backend Directory:**
   ```
   cd Speed-X/server
   ```
2. **Install dependencies:**

```
# Using npm
npm install

# Or using yarn
yarn install
```

3.**Set Up Environment Variables:**
Create a `.env` file in the `server` directory and add your PageSpeed Insights API key:

```
PAGESPEED_API_KEY=YOUR_API_KEY
PORT=PORT_NO

```
4. **Run the Server:**
   
```
node server.js
```
# Project Structure
The project is divided into two main directories: frontend and backend.

## Frontend
- **src/components:** Contains React components such as Navbar, AnalyzeForm, PerformanceMetrics, MetricCard, and MetricCircle.
- **src/App.js:** The main application component that sets up routes and integrates all components.
- **src/index.js:** Entry point for the React application.
- 
## Backend
- **src/routes:** Contains the Express.js routes for handling API requests.
- **src/controllers:** Contains the controller functions for fetching performance data.
- **src/utils:** Contains utility functions like error handling and response formatting.

## Usage

# Adding a New URL for Analysis
- Enter the website URL in the input field on the homepage.
- Click the "Analyze" button to fetch performance data.
- View the detailed metrics and performance summary on the homepage.
  
# Understanding Metrics
- **Performance Score:** Overall performance rating on a scale of 0-100.
- **First Contentful Paint (FCP):** Time taken for the first content to appear on the screen.
- **Largest Contentful Paint (LCP):** Time taken for the largest content element to appear.
- **Cumulative Layout Shift (CLS):** Measures the visual stability of a page.
- **Total Blocking Time (TBT):** Total time blocked by long tasks.
- **Speed Index:** Measures how quickly content is visually displayed.
- **Time to Interactive (TTI):** Time taken for the page to become fully interactive.

# Filtering Metrics
- Use the color-coded performance circles to quickly assess which areas need improvement.
- Hover over any metric to get more details and explanations.

## Additional Scripts
- # Build the project:

```
# Using npm
npm run build

# Or using yarn
yarn run build
```
## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.






