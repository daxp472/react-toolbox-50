# React Hot Toast Demo

A simple React project built with Vite to demonstrate how to integrate and use the `react-hot-toast` library for toast notifications.

## Table of Contents
- [What This Project Does](#what-this-project-does)
- [How to Run Locally](#how-to-run-locally)
- [How to Use This in Your Project](#how-to-use-this-in-your-project)
- [Files Overview](#files-overview)
- [Code Highlights](#code-highlights)
- [Why This Structure?](#why-this-structure)
- [Questions?](#questions)

## What This Project Does
This demo shows how to:
- Set up `react-hot-toast` in a React app.
- Create reusable components and clean folder structure.
- Style a simple, neat UI with buttons to trigger toasts.
- Use success, error, and loading toast notifications.

## How to Run Locally
Follow these steps to get this project running on your machine:

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd react-hot-toast-demo
   ```
2. **Install Dependencies**
   ```bash
   npm install
   ```
3. **Run the Project**
   ```bash
   npm run dev
   ```
   Open http://localhost:5173 (or the URL shown in your terminal) in your browser.

## How to Use This in Your Project
1. Install react-hot-toast in your React app:
   ```bash
   npm install react-hot-toast
   ```
2. Add the `<Toaster />` component in your root file (e.g., App.jsx).
3. Import toast and use it anywhere (e.g., `toast.success('Message')`).
4. Copy the component or styling ideas from this demo as needed!

## Files Overview
| File/Folder | Purpose |
| --- | --- |
| src/App.jsx | Root component that holds the `<Toaster />` and renders the demo UI. |
| src/components/ | Contains reusable components. |
| src/components/Button.jsx | A reusable button component with variants (primary, danger, info). |
| src/components/ToastDemo.jsx | Main demo component with logic to trigger success, error, and loading toasts. |
| src/styles/ | Holds CSS files for styling. |
| src/styles/ToastDemo.css | Styles for the ToastDemo component (card layout, buttons). |
| src/App.css | Global styles for the app (background, centering). |
| src/main.jsx | Entry point of the React app (no changes made here). |

## Code Highlights
### Triggering a Success Toast (in ToastDemo.jsx)
```jsx
const handleSuccess = () => toast.success('Task completed successfully!');
```
### Styling a Button (in ToastDemo.css)
```css
.btn-primary {
  background-color: #007bff;
  color: white;
}
```
### Toaster Setup (in App.jsx)
```jsx
<Toaster position="top-right" reverseOrder={false} />
```
## Why This Structure?
- Modular: Components and styles are separated for reusability.
- Clean: Easy to understand and extend for real projects.
- Polished: Simple but professional UI/UX with shadows and hover effects.

## Questions?
If you’re stuck, feel free to revisit the YouTube video or leave a comment/issue here. Happy coding!