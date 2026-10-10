# 🛍️ Product Management Microservices

A full-stack product management application built with a **microservices architecture**, using NestJS for the backend, React.js for the frontend, MySQL for database management, and RabbitMQ for asynchronous communication between services.

The project is divided into a **Main Service** and an **Admin Service**, with a React.js frontend providing the user interface.

## 🚀 Technologies Used

### Backend
- **NestJS** — Node.js framework for building scalable server-side applications.
- **MySQL** — Relational database for storing application data.
- **RabbitMQ** — Message broker for asynchronous communication between services.

### Frontend
- **React.js** — Component-based library for building user interfaces.
- **Bootstrap** — Responsive UI components and styling.

## 🏗️ Project Architecture

The application is organized into separate services to improve modularity and maintainability.

```text
Product Microservices
│
├── Main Service
│   └── NestJS
│
├── Admin Service
│   └── NestJS
│
├── Frontend
│   ├── React.js
│   └── Bootstrap
│
├── Database
│   └── MySQL
│
└── Message Broker
    └── RabbitMQ
```

## ⚙️ Key Components

### 1. Main Service
- Handles the main application functionality.
- Provides backend APIs for the frontend.
- Uses NestJS to organize application logic.

### 2. Admin Service
- Provides a separate backend service for administrative functionality.
- Uses NestJS to maintain a modular service structure.

### 3. Frontend
- Built with React.js.
- Uses Bootstrap for responsive layouts and UI components.
- Communicates with the backend through APIs.

### 4. MySQL Database
- Stores application data in a relational database.
- Supports structured data management.

### 5. RabbitMQ
- Enables message-based communication between backend services.
- Supports asynchronous processing, helping services communicate without requiring every operation to happen in a single synchronous request.

## 🔄 Communication Flow

The application combines HTTP-based frontend communication with message-based backend communication.

```text
React.js Frontend
        |
        | HTTP Requests
        v
NestJS Backend Services
        |
        | RabbitMQ Messages
        v
Other Backend Services
        |
        v
      MySQL
```

*Note: The actual request flow and database ownership depend on how the services are implemented in the project.*

## 📁 Project Structure

The repository can be organized as follows:

```text
product-microservices/
│
├── backend/
│   ├── main/
│   └── admin/
│
├── frontend/
│
└── README.md
```

*Adjust the directory names to match your actual repository structure.*

## 🛠️ Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- MySQL
- RabbitMQ

### 1. Clone the Repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd product-microservices
```

### 2. Configure the Backend Services

Navigate to each backend service directory and install its dependencies:

```bash
cd backend/main
npm install
```

Repeat for the admin service:

```bash
cd backend/admin
npm install
```

Configure the required environment variables for your MySQL database, RabbitMQ connection, and application ports.

### 3. Start the Backend Services

From each service directory, run:

```bash
npm run start:dev
```

Start the main and admin services in separate terminals.

### 4. Start the Frontend

```bash
cd frontend
npm install
npm start
```

If the frontend uses Vite, run `npm run dev` instead.

### 5. Verify the Services

Ensure that:
- MySQL is running and the database configuration is correct.
- RabbitMQ is running and the connection settings are configured.
- Both NestJS services start successfully.
- The React frontend can communicate with the backend APIs.

## 🔐 Environment Configuration

Use environment variables to configure database connections, message broker URLs, and service ports.

Example configuration:

```env
# MySQL
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_DATABASE=your_database

# RabbitMQ
RABBITMQ_URL=amqp://localhost:5672
```

Create the appropriate `.env` files for each service based on your implementation. Never commit real credentials or secrets to GitHub.

## 🎯 Project Goals

- Apply microservices architecture principles.
- Separate main application functionality from administrative functionality.
- Implement asynchronous communication using RabbitMQ.
- Manage relational data using MySQL.
- Build a responsive frontend using React.js and Bootstrap.
- Improve application modularity and maintainability.

## 👩‍💻 Author

Developed as a full-stack project using NestJS, React.js, MySQL, and RabbitMQ.
