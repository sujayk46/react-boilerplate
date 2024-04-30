# React Boilerplate

Welcome to React Boilerplate!

This boilerplate provides a structured setup for starting React projects with Vite. It includes TypeScript, Tailwind CSS, ESLint, and more, to help you kickstart your development process efficiently.

## Features

- Vite: Fast, lightweight build tooling
- TypeScript: Typed JavaScript at Any Scale
- Tailwind CSS: Utility-first CSS framework
- ESLint: Pluggable linting utility for JavaScript and JSX
- Pre-configured folder structure for easier development

## Getting Started

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine.

### Installation

1. Clone this repository to your local machine:
   ```ts
   git clone https://github.com/sujayk46/react-boilerplate.git
   ```

2. Install dependencies:
   ```ts
   npm i 
   ```
3. Start the development server, run:
   ```ts
   npm run dev
   ```

# Project Structure

This document provides an overview of the folder structure and content of the React boilerplate project.



### public

This folder contains static assets and the HTML template (`index.html`) where your React app is mounted. It's typically used for assets like logos, icons, or other files that need to be publicly accessible.

- `vite.svg`: An example SVG file used as a static asset.

### src

The `src` folder is where the main application code resides. It contains various subfolders and files that organize the codebase.

#### app

Contains files related to the main application setup.

- `App.tsx`: The main React component where your application starts rendering.
- `main.tsx`: The entry point of your application.

#### assets

Holds assets used in the application, such as images, JSON files, and SVG files.

- `images/`: Directory for image assets.
- `jsons/`: Directory for JSON data files.
- `svgs/`: Directory for SVG assets.

#### components

Contains reusable UI components used across different parts of the application.

- `layouts/`: Components for defining layout structures.
- `shared/`: Reusable components shared across the application.

#### configs

Contains configuration files for various libraries or frameworks used in the project.

- `mui/`: Configuration files for Material-UI, if applicable.
  - `theme.tsx`: Material-UI theme configuration.

#### environments

Contains environment-specific configuration files.

- `development.env`: Environment variables specific to the development environment.
- `production.env`: Environment variables specific to the production environment.

#### pages

Contains React components representing different pages or routes in the application.

- `demo.tsx`: Example page component.
- `landing-page/`: Directory for landing page components.
- `secure/`: Directory for secure area components.

#### services

Holds service files responsible for interfacing with external APIs or performing other asynchronous tasks.

#### store

Contains files related to application state management, such as Redux store setup and slices.

- `slices/`: Redux slice files.
  - `counter.slice.ts`: Example Redux slice file.
- `store.init.ts`: Redux store initialization.

#### styles

Contains CSS files for styling the application.

- `App.css`: CSS file for styling the main application component.
- `index.css`: CSS file for global styles.

#### vite-env.d.ts

Type declaration file for Vite-specific environment variables.

## Files:

- `.eslintrc.cjs`: ESLint configuration file.
- `.gitignore`: Specifies intentionally untracked files to ignore when using Git.
- `index.html`: HTML template for the React app.
- `LICENSE.md`: License file.
- `package-lock.json`: Lockfile automatically generated for any operations where npm modifies either the `node_modules` tree or `package.json`.
- `package.json`: Manifest file for Node.js projects, contains project metadata and dependencies.
- `postcss.config.js`: PostCSS configuration file.
- `README.md`: This file, provides an overview of the project structure and content.
- `tailwind.config.js`: Tailwind CSS configuration file.
- `tsconfig.json`: TypeScript configuration file.
- `tsconfig.node.json`: TypeScript configuration file for Node.js environment.
- `vite.config.ts`: Vite configuration file.


This will start the development server and open your default web.


# Plugins

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```ts
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Contributing

Feel free to contribute to this project by forking the repository, making your changes, and submitting a pull request. Any contributions you make are **greatly appreciated**.
