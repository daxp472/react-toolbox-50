# React Icons Demo - Day 03

Welcome to Day 03 of the React series! This project showcases how to integrate and use the `react-icons` library in a React app built with Vite. It’s designed to be simple, interactive, and polished—perfect for exploring hundreds of icons from popular packs like Font Awesome and Material Design.

## Features
- **Centered UI**: The app is neatly centered on the screen for a clean look.
- **Dropdowns with Icons**: Click buttons to see 40-50 icons from Font Awesome, Material Design, or a mixed set.
- **Interactive Popup**: Click any icon to see its name and pack in a popup window.
- **Footer Tag**: A fixed footer credits "Made by Dax Patel" with a GitHub link.
- **Scalable Design**: Easily expandable to show 400-500+ icons from multiple packs.

## Setup Instructions
1. **Clone the Repo** (if applicable):
   ```bash
   git clone <your-repo-url>
   cd day-03
   ```
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Run the App**:
   ```bash
   npm run dev
   ```
4. **Open** `http://localhost:5173` in your browser.

## How to Use
### Explore Icons:
- Click "Font Awesome Icons", "Material Design Icons", or "Mixed Icons" buttons to see a dropdown of icons.
- Scroll through the grid to view 40-50 icons per pack.

### Interact with Icons:
- Click any icon to open a popup showing its name (e.g., FaRocket) and pack (e.g., Font Awesome).
- Close the popup with the "×" button.

### Check the Footer:
- At the bottom, you’ll see "Made by Dax Patel" with a link to my GitHub.

## Project Structure
```
src/
├── components/
│   ├── icons/
│   │   └── IconDropdown.jsx  # Dropdown component with interactive icons
├── App.jsx                   # Main app with buttons, popup, and footer
├── App.css                   # Styles for centering, dropdowns, and popup
└── main.jsx                  # Vite entry point
```

## Key Changes
- **Initial Setup**: Added react-icons to a Vite React project.
- **Dropdowns**: Created buttons to toggle icon sets (Font Awesome, Material Design, Mixed).
- **Interactivity**: Added a popup on icon click to show details.
- **Styling**: Centered the UI and added a fixed footer with credits.
- **Scalability**: Structured to support 400-500+ icons by adding more packs or pagination (future scope).

## Tech Stack
- **React**: ^19.0.0
- **Vite**: ^6.2.0
- **react-icons**: ^5.5.0
- **CSS**: Custom styles for a clean and professional UI

## Troubleshooting
- **Icons Not Loading?**
  - Check if `react-icons` is properly installed: `npm install react-icons`
  - Verify your imports are correct (e.g., `import { FaGithub } from 'react-icons/fa'`)
  - Make sure you're using valid icon names from the latest version

- **Performance Issues?**
  - Import only the icons you need instead of entire icon sets
  - Consider using lazy loading for icon sets
  - Implement pagination if displaying large numbers of icons

- **Styling Problems?**
  - Icons can be styled using standard CSS properties
  - Use the `size` prop for quick resizing: `<FaGithub size={24} />`
  - Custom colors can be applied via the `color` prop

## Extended Features
- Search functionality to find specific icons
- Color picker for icon customization
- Copy icon import statement on click
- Categories view for better organization
- Favorites system to bookmark commonly used icons

## Video Tutorials
📺 **Complete Series:**
1. Basic Setup & Integration - [Watch Part 1](your-video-link-1)
2. Advanced Features & Styling - [Watch Part 2](your-video-link-2)
3. Performance Optimization - [Watch Part 3](your-video-link-3)

## Community & Support
- Report issues on [GitHub](https://github.com/daxp472/react-toolbox-50/issues)
- Join our Discord community: [React Icons Demo](your-discord-link)
- Follow for updates: [@daxpatel](your-twitter-link)

## Credits
Made with ❤️ by Dax Patel

GitHub: https://github.com/daxp472

Happy coding!