# 📝 TaskFlow — Advanced Task Management System

A high-performance, modular Todoist clone built with **Vanilla JavaScript**, **ES6 Modules**, and **Webpack**. This project focuses on Object-Oriented Programming (OOP) principles, persistent data storage, and a professional-grade build pipeline.

**🔗 [Live Preview](https://mohiuuddin.github.io/Todo-List/)**

---

## 🚀 Key Features

* **Project-Based Organization:** Create, edit, and delete custom project folders to categorize tasks (e.g., "Web Dev," "Personal," "Banking").
* **Full CRUD Functionality:** Seamlessly Create, Read, Update, and Delete tasks with a dynamic UI that responds instantly.
* **Persistent Storage:** Integrated **Web Storage API (localStorage)** to ensure your data is saved across browser sessions.
* **Priority Management:** Color-coded priority levels to help users focus on high-impact tasks.
* **Detailed Task Views:** Expand any task to view/edit descriptions, due dates, and specific notes.
* **Date Intelligence:** Powered by `date-fns` for accurate task scheduling and formatting.

---

## 🛠️ Technical Architecture

### 1. Modern JavaScript & OOP
The application is built using **ES6 Classes and Factory Functions**, ensuring that every "Todo" and "Project" is a structured object. This approach makes the code highly predictable and easy to scale.

### 2. Separation of Concerns (SoC)
To maintain a clean codebase, the logic is strictly divided into three core layers:
* **Logic Module:** Manages the state, project arrays, and task creation.
* **Storage Module:** Handles the JSON serialization for `localStorage` and data restoration.
* **DOM/UI Module:** An isolated layer that listens for user input and renders the interface.

### 3. 📦 The Webpack Build Pipeline
This project marks a transition to professional-grade development through the use of **Webpack**:
* **Module Bundling:** Efficiently bundles multiple ES6 files into a single optimized production script.
* **Dependency Management:** Used NPM to integrate and manage the `date-fns` library.
* **Asset Loaders:** Configured Webpack to handle CSS and image assets directly within the JavaScript dependency graph.

---

## 📈 Learning Outcomes

Building TaskFlow provided deep technical insights into:
1. **JSON Restoration:** Developed logic to re-attach methods to objects after retrieving them from `localStorage` (since JSON doesn't store functions).
2. **Event Delegation:** Optimized performance by using a single event listener on parent containers for dynamic task items.
3. **State Management:** Keeping the UI perfectly in sync with the underlying data model during complex CRUD operations.

---

## ⚙️ Development & Setup

To run this project locally and explore the build process:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Mohiuuddin/Todo-App.git](https://github.com/Mohiuuddin/Todo-List.git)
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run in Development Mode (with HMR):**
    ```bash
    npm run start
    ```
4.  **Generate a Production Build:**
    ```bash
    npm run build
    ```

---

## 👨‍💻 Author

**Mohiuuddin** *ICT Professional & Full-Stack Developer* [LinkedIn](https://www.linkedin.com/in/mohiuddin777) | [GitHub](https://github.com/Mohiuuddin)

