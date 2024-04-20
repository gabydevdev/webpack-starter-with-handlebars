# Webpack Starter Kit

Welcome to the Webpack Starter Kit — a flexible and easy-to-use boilerplate for building frontend projects using Webpack. It is configured with essential tools to optimize development and build processes, ensuring you can focus on creating your application without worrying about initial setup complexities.

## Features

- **Webpack 5**: Modern bundling of your assets for optimized performance.
- **Babel Integration**: Supports ES6+ JavaScript through Babel.
- **SASS Support**: Style your application using SCSS syntax.
- **Development Server**: Configured with a webpack dev server for live reloading.
- **Optimized Production Build**: Includes production-specific configurations like minification and optimization out of the box.
- **Linter Setup**: ESLint and StyleLint integrated for code quality.
- **Source Maps**: Easier debugging with source-mapped code in development.

## Getting Started

These instructions will get your copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- node.js - Download and install node.js from https://nodejs.org/

### Installing

Clone the repository:

```bash
git clone https://github.com/iamgaby7521/webpack-starter-kit.git
```
Navigate to the project directory and install the dependencies:

```bash
cd webpack-starter-kit
npm install
```

#### Start the development server:

```bash
npm start
```
Now, open your browser and visit http://localhost:8080 to see your application in action.

#### To build the production package:

```bash
npm run build
```
The production-ready files will be located in the **build** folder.

## Configuration

Details about the project structure and configuration:

- **webpack.config.dev.js** and **webpack.config.prod.js** for development and production environments.
- **.env.development** and **.env.production** for managing environment variables.


## Project Structure

- `src/`: Source files for the application.
- `src/*.html`: HTML files.
- `src/scripts/index.js`: JavaScript entry file.
- `src/styles/`: Stylesheets for the application.
- `webpack/`: Webpack configuration files.

## License

This project is open-sourced under the MIT license. See the [LICENSE](LICENSE) file for more information.

## Acknowledgments

The idea for this repository came first from: https://github.com/wbkd/webpack-starter

##

**Thank you for choosing Webpack Starter Kit!**
