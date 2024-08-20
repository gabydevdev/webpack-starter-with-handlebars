# Webpack + Handlebars Starter Kit

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

## Description

A starter kit for front-end projects using Webpack and Handlebars, designed to streamline the development process with a robust workflow for building high-performance web applications.

## Features

-   **Webpack 5**: Efficient bundling for modern web development.
-   **Handlebars**: Integrated templating for dynamic HTML generation.
-   **ES6+ Support**: Transpilation through Babel for using modern JavaScript features.
-   **SCSS Support**: Styling with SCSS and autoprefixing for cross-browser compatibility.
-   **Live Reloading**: Auto-refresh during development for a smoother workflow.
-   **Optimized Builds**: Minified and optimized assets for production.

## Prerequisites

-   **Node.js**: Version 12 or newer
-   **npm**: Version 6 or newer

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/gabydevdev/webpack-starter-with-handlebars.git
cd webpack-starter-with-handlebars
npm install
```

## Usage

### Development Server

To start the development server with live reloading, run:

```bash
npm start
```

Once the server is running, open http://localhost:8000 in your browser to view the application.

### Building for Production

To build the project for production, run:

```bash
npm run build
```

This will compile all assets and place them into the `build` directory, ready for deployment.

## Project Structure

```
webpack-starter-with-handlebars/
├── public/             # Static assets
├── src/                # Source files (JS, SCSS, Handlebars templates)
├── .babelrc            # Babel configuration
├── .eslintrc           # ESLint configuration
├── .prettierrc.json    # Prettier configuration
├── webpack.config.js   # Webpack configuration
└── package.json        # Project dependencies and scripts
```

## Scripts

Here are the main npm scripts you can run:

- `npm start`: Starts the development server with live reloading.
- `npm run build`: Builds the project for production, outputting files to the build directory.
- `npm run lint:styles`: Linting for SCSS files using stylelint.
- `npm run lint:scripts`: Linting for script files using eslint.

## Contributing

Contributions are welcome! If you'd like to help improve this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a Pull Request.

## License

This project is open-sourced under the MIT license. See the [LICENSE](LICENSE) file for more information.
