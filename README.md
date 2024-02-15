# App

This project is a React application with TypeScript, designed to demonstrate a simple account management system. It features a mocked backend, allowing for full local execution. The application is designed with a focus on user-friendliness and adheres to good graphic standards, utilizing copyright-free logos and icons.

In the development of the accounts feature, a **Type** attribute has been added to more effectively showcase the Dashboard capabilities.

## Getting Started

To get the project up and running on your local machine for development and testing purposes, follow these instructions. Note that you need to start the backend before running the frontend for the application to work correctly.

### Prerequisites

You'll need to have Node.js and Yarn installed on your machine. To install these, follow the instructions on the [Node.js website](https://nodejs.org/).

### Starting the Backend

Before starting the frontend application, you need to start the mocked backend server. Follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Had3r/web-app.git
   ```

2. Navigate to the backend directory:

   ```bash
   cd web-app/backend
   ```

3. Install the necessary packages:

   ```bash
   yarn
   ```

4. Start the backend server:

   ```bash
   yarn start
   ```

   This will run the backend server in development mode. Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

### Starting the Frontend

After the backend server is up and running, you can start the frontend application:

1. Navigate to your project directory:

   ```bash
   cd web-app/frontend
   ```

2. Install Yarn packages:

   ```bash
   yarn
   ```

3. Start the frontend application:

   ```bash
   yarn start
   ```

   This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Running the Tests

To run the automated tests for this system, execute:

```bash
cd web-app/frontend
yarn test
```

## Built With

- [React](https://reactjs.org/) - The web framework used.
- [TypeScript](https://www.typescriptlang.org/) - Used for static type checking.
- [json-server](https://github.com/typicode/json-server) - Used to mock the backend for ease of development and testing.
- [TailwindCSS](https://tailwindcss.com/) - Used for styling the application.
- [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Used for running tests to ensure code quality.

## Author

- _Adrian Zawadzki_ - [GitHub](https://github.com/Had3r)
