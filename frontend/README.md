

#  Task Manager Application (Full-Stack)

A clean, functional, and responsive Task Manager application built as part of a technical assessment. This project demonstrates frontend-backend integration, RESTful API design, and professional UI/UX principles.

#  Project Links
- **Live Repository**: [https://github.com/Krishna0812478/Task-Manager-Fullstack](https://github.com/Krishna0812478/Task-Manager-Fullstack)

##  Features
- **View Tasks**: Fetch and display a list of tasks from the backend.
- **Add Task**: Create new tasks with title validation.
- **Toggle Status**: Mark tasks as "Done" or "Undo" with instant UI feedback.
- **Delete Task**: Remove tasks from the list.
- **State Handling**: Includes loading indicators and error messages for a smooth user experience.
- **Modern UI**: Dark-themed, minimalist design for better readability.

##  Tech Stack
- **Frontend**: React.js, Vite, Axios (for API calls)
- **Backend**: Node.js, Express.js
- **API**: RESTful architecture
- **Storage**: In-memory storage (Array-based)

---

## Setup & Installation

Follow these steps to run the project locally:

### 1. Clone the repository
```bash
# Extract the zip file and open the folder in VS Code
cd FULLSTACK_ASSIGNMENT
```

### 2. Backend Setup
```bash
cd Backend
npm install
node server.js
```
*The server will start on **http://localhost:5000***

### 3. Frontend Setup
Open a **new terminal** and run:
```bash
cd frontend
npm install
npm run dev
```
*The application will be available at **http://localhost:5173***

---

##  Assumptions & Trade-offs
To adhere to the 1-2 hour timeframe suggested in the assignment requirements, the following decisions were made:

* **In-Memory Storage:** Used a simple array to store tasks instead of a persistent database to prioritize API structure and functional correctness within the time limit.

* **State Management:** Used React's useState and useEffect for efficient state handling without the overhead of Redux for a small feature set.

* **Styling:** Focused on a clean, modern CSS-in-JS approach to ensure the application is visually professional while remaining lightweight.

## About the Developer
* **Name:** Krishna Gupta
* **Role:** Frontend Developer Aspirant
* **GitHub:** [https://github.com/Krishna0812478](https://github.com/Krishna0812478)
```

