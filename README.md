# Vue 3 + Vite + Tailwind CSS

This project is a trivia game for kids about countries around the world, developed using Vue 3 and Vite, with styling provided by Tailwind CSS.

## Project Setup

- Clone the repository and navigate to the project directory.
- Install dependencies with `npm install`.
- Start the development server with `npm run dev`.

## Tailwind CSS Integration

Tailwind CSS was added to the project to provide utility-first styling. The following steps were taken to integrate Tailwind CSS:

1. Install Tailwind CSS and its peer dependencies:
   ```
   npm install -D tailwindcss postcss autoprefixer
   ```
2. Initialize Tailwind CSS configuration:
   ```
   npx tailwindcss init -p
   ```
   This creates `tailwind.config.js` and `postcss.config.js` files in the project.

## Configuration Files

- `tailwind.config.js`: Configures Tailwind CSS to strip unused styles in production, and sets up the paths to all template files.
- `postcss.config.js`: Uses Tailwind CSS as a PostCSS plugin.

## Running the Application

To run the application locally:

1. Ensure all dependencies are installed.
2. Start the development server:
   ```
   npm run dev
   ```
3. Open the local server URL in a browser to view the application.

## Building the Application

To build the application for production:

1. Run the build command:
   ```
   npm run build
   ```
2. The built assets will be output to the `dist` directory.

## Application Components

- `PlayGame.vue`: The component for the start page where users can enter their name and start the game.
- `TriviaQuestion.vue`: The component that handles the display and interaction of trivia questions, including animations for correct answers using the `canvas-confetti` package.
- `Leaderboard.vue`: The component that displays the leaderboard with dummy data.
- `triviaQuestions.json`: Contains the trivia questions and answers data.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

## Deployment

- The deployment process is currently manual. After building the application, the `dist` directory needs to be deployed to the server's serving directory.
- Further instructions will be provided once the deployment pipeline is established or the manual deployment process is clarified by the user.
