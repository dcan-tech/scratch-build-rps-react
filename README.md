# Rock-Paper-Scissors Game (React Edition)

This project began as a hand-coded Rock-Paper-Scissors game developed as a school project using plain HTML, CSS, and JavaScript. It is now being refactored and rebuilt using **React** with **Vite**, adopting modern frontend practices such as modular components, mobile-first responsive design, and a maintainable project structure.

## Overview

The game provides an interactive UI where the player selects Rock, Paper, or Scissors against a computer opponent. The computer's choice is randomized, and the result is shown with dynamic UI feedback. There's no score tracking yet, but the experience includes animated text sequences ("Ready? Here we go! Rock! Paper! Scissors!"), responsive hand buttons, and a central action button that toggles between "Play Game!" and "Play Again?" depending on the game state.

Design choices were initially captured using Figma based on a provided reference image. The React rebuild continues to follow this design intent while modernizing the codebase.

## Features

- **Responsive, Mobile-First Layout**  
  Designed with a mobile-first approach and fully responsive layout using Flexbox and media queries.

- **Randomized Computer Choice**  
  The opponent's move is selected randomly from the three options.

- **Dynamic UI Feedback**  
  Interactive, timed display of in-game phrases and result highlights.

- **Component-Based Structure**  
  Buttons, messages, and game logic are modularized using React components.

- **Outcome Visuals**  
  Each round ends with visual indicators, player hand in orange, computer hand in pink, and combo colors for ties.

## Technologies

- **React**: Component-based UI rendering and state management
- **Vite**: Fast dev server and bundler for modern React projects
- **CSS**: Modular styles for layout and responsiveness (`index.css`, `Choice.css`)
- **JavaScript (JSX)**: Game logic and dynamic updates inside React components

## Project Structure

The React version follows a modular structure inspired by the MVC pattern:

- **src/**  
  Contains application logic and React components
    - `App.jsx`: Main application file
    - `components/Choice.jsx`: Hand button component
    - `assets/`: SVG files and images
    - `css/`: Stylesheets for layout and component-specific rules

- **public/**  
  Static files (optional favicon, fallback index.html if needed)

- **index.html**  
  Vite's main HTML template for React mounting

## How to Run

To run the React version locally:

1. Clone the repository.
2. Open the project folder.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Visit `http://localhost:5173` (or whatever port Vite assigns) in your browser.

## Future Enhancements

- **Score Tracking**  
  Add game state logic to keep track of win/loss/tie counts.

- **Enhanced Game Modes**  
  Multiple rounds, difficulty settings, or player-vs-player mode.

- **UI/UX Improvements**  
  Polish transitions, button animations, and layout spacing.

- **Sound Effects**  
  Add audio cues for selection and results.

- **Accessibility**  
  Add keyboard and screen reader support for full accessibility.

## Credits

- Original project developed as a school assignment.
- Figma mockup based on a reference image from the assignment.
- React refactor, design polish, and responsiveness by Dylan Canfield.

