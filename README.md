# Library Management System

## Overview
The **Library Management System** is a full-stack web application built using **Angular** for the frontend and **Node.js, Express.js, and MongoDB** for the backend. The system allows users to perform CRUD (Create, Read, Update, Delete) operations on books, manage users, and track book borrowing.

## Features
- **User Management**: Register, login, and manage users under implementation.
- **Book Management**: Add, update, delete, and list books.
- **Borrowing System**: Track which user has borrowed which book under implementation.
- **Search and Filter**: Search books by title, author, or category under implementation.
- **Responsive UI**: Built with Angular for a modern and dynamic frontend experience.

## Tech Stack
### Frontend:
- **Angular** (latest version)
- **TypeScript**
- **Bootstrap (for styling)

### Backend:
- **Node.js**
- **Express.js**
- **MongoDB** (NoSQL database)
- **Mongoose** (ODM for MongoDB)

## Installation and Setup
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Angular CLI](https://angular.io/cli)

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/rajeevgi/Library_Management_System_Using_Angular.git
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the backend server:
   ```sh
   npm start
   ```
   The backend will run at `http://localhost:5000`

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the Angular app:
   ```sh
   ng serve
   ```
   The frontend will be available at `http://localhost:4200`

## API Endpoints
### User Routes
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - User login

### Book Routes
- `GET /api/books` - Fetch all books
- `POST /api/books/addBook` - Add a new book
- `PUT /api/books/updateBook/:id` - Update book details
- `DELETE /api/books/deleteBook/:id` - Remove a book

## Contributing
1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-branch`
5. Submit a pull request

