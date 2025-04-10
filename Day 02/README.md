# Day 2: React Clipboard Demo with `react-copy-to-clipboard`

## Project Overview

Welcome to Day 2 of my **React Toolbox 50** series. In this project, we're exploring the `react-copy-to-clipboard` library, which lets you copy text to the clipboard with a single click. This demo includes practical examples like copying an email, input field content, and showing "Copied!" feedback—all with a clean, polished UI.

### What's This Project About?

We're building a small React app to demonstrate how to:

* Copy static text (e.g., an email address)
* Copy dynamic text from an input field
* Add user-friendly feedback when text is copied
* Keep the code modular and reusable for real-world projects

### Project Structure

Here's a quick overview of the project structure and key files:

#### src/App.jsx

* What it does: The main file that ties everything together. It imports and displays all demo components in a neat layout.
* Key Code:
```jsx
import EmailCopyDemo from './components/EmailCopyDemo';
// ...other imports
function App() {
  return (
    <div className="app-container">
      <h1>React Clipboard Demo</h1>
      <EmailCopyDemo />
      {/* Other demos */}
    </div>
  );
}
```

#### src/components/CopyButton.jsx

* What it does: A reusable button that uses react-copy-to-clipboard to copy text. All demos use this!
* Key Code:
```jsx
import { CopyToClipboard } from 'react-copy-to-clipboard';
const CopyButton = ({ text, onCopy }) => (
  <CopyToClipboard text={text} onCopy={onCopy}>
    <button className="copy-btn">Copy</button>
  </CopyToClipboard>
);
```

#### src/components/EmailCopyDemo.jsx

* What it does: Copies a static email address (example@email.com) when you click "Copy".
* Key Idea: Shows how to copy predefined text.

#### src/components/InputCopyDemo.jsx

* What it does: Lets you type in an input field and copy whatever you typed.
* Key Idea: Handles dynamic text with React state.

#### src/components/FeedbackCopyDemo.jsx

* What it does: Copies text and shows a "Copied!" message for 2 seconds.
* Key Idea: Adds UX feedback using state and a timeout.

#### src/styles/

* What it does: Holds CSS files (e.g., App.css, CopyButton.css) for a clean, polished look.
* Example: Buttons have a blue hover effect, and demos are styled with subtle borders.

### How to Run This Locally

Follow these steps to try it yourself:

1. **Clone or Download**:
	* Clone this repo: `git clone <repo-url>` or download the ZIP file.
2. **Navigate to the Folder**:
	```bash
    cd Day-02
    ```
    
3. **Install Dependencies**:
	```bash
npm install react-copy-to-clipboard --legacy-peer-deps
```
4. **Start the App**:
	```bash
npm start
```
5. **Open Your Browser**:
	Open your browser at http://localhost:3000 to see it in action.

### How to Use This in Your Project

1. **Install the Library**:
	```bash
npm install react-copy-to-clipboard --legacy-peer-deps
```
2. **Copy the CopyButton Component**:
	Drop it into your project and pass it text to copy.
3. **Add Some Style**:
	Use the CSS from styles/ or tweak it to match your app.
4. **Extend It**:
	Add more features like copying JSON, links, or even generating shareable content.

For more details, watch the video on YouTube where I explain it step-by-step!