**Gato Frontend Application**

The `gato-frontend` is a sleek and modern web application built with React, offering a dynamic and responsive user experience. It provides essential features like user authentication, personalized dashboards, and intuitive todo list management, all wrapped in a distinctive arcade-inspired UI. This project demonstrates best practices in frontend development, leveraging modern tools and a component-based architecture for scalability and maintainability. ✨

### **Installation**
To get this project up and running on your local machine, follow these simple steps:

➡️ **Clone the Repository:**
First, clone the project repository to your local machine:
```bash
git clone <repository-url> # Replace with your actual repository URL
cd gato-frontend
```

📦 **Install Dependencies:**
Next, install all the required Node.js packages using your preferred package manager:
```bash
npm install
# or
yarn install
```

⚙️ **Environment Configuration:**
Create a `.env` file in the project's root directory. This file will hold your environment-specific variables. Copy the example file:
```bash
cp .env.example .env
```
Open the newly created `.env` file and set the base URL for your backend API. If not specified, it will default to `http://localhost:8080`.
```
VITE_API_BASE_URL=http://localhost:8080
```
*Note: Providing an empty string (e.g., `VITE_API_BASE_URL=`) allows Vite's proxy configuration in `vite.config.ts` to handle API requests prefixed with `/api` by forwarding them to `http://localhost:8080`.*

### **Usage**
Once installed and configured, you can start the development server and interact with the application.

1.  **Start the Development Server:**
    Execute the following command to launch the Vite development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will typically become available in your web browser at `http://localhost:5173`.

2.  **Register a New Account:**
    Navigate to the `/register` page in your browser. Fill in the required fields: a display name, a valid email address, and a strong password. After successful registration, you will be automatically redirected to the login page.

3.  **Log In to Your Account:**
    Proceed to the `/login` page. Enter the email and password you used during registration. Upon successful authentication, the application will direct you to your personalized dashboard.

4.  **Explore the Dashboard:**
    The dashboard (`/dashboard`) provides a concise overview of your player profile. Here, you can view your display name, email, accumulated points, current streak count, and any badges you have earned.

5.  **Manage Your Todos (Quest Log):**
    Access the `/todos` page to manage your personal list of tasks, presented as a "Quest Log."
    *   **View Quests:** Review all your existing tasks, noting their status (completed or pending).
    *   **Add New Quest:** Utilize the "New Quest" form to add new tasks. Each quest requires a title and can optionally include additional notes for detailed descriptions.
    *   **Complete Quests:** Mark tasks as complete with a simple click. The application provides visual feedback for completed items.

### **Features**
*   🚀 **User Authentication:** Robust registration and login flows, securing user access and managing session tokens.
*   👤 **Personalized Dashboard:** Displays a dynamic user profile, including display name, email, game points, streak counts, and collectible badges.
*   ✅ **Todo Management (Quest Log):** Comprehensive CRUD operations for tasks (create, list, update/complete), enhancing productivity.
*   ✨ **Arcade-Inspired UI:** A unique and visually engaging user interface, meticulously crafted with custom fonts, thematic colors, and Tailwind CSS for a retro-modern aesthetic.
*   ⚡ **Fast Development Environment:** Leverages Vite for an incredibly fast development server, optimized builds, and efficient hot module reloading.
*   🔄 **State Management with React Query:** Efficient asynchronous data fetching, caching, and synchronization with the backend API, ensuring a smooth user experience.
*   🛡️ **Protected Routes:** Implements client-side route protection, restricting access to core application features (Dashboard, Todos) to authenticated users only.

### **Technologies Used**

| Technology       | Description                                              | Link                                                                      |
| :--------------- | :------------------------------------------------------- | :------------------------------------------------------------------------ |
| **React**        | A JavaScript library for building user interfaces.       | [React.dev](https://react.dev/)                                           |
| **Vite**         | Next-generation frontend tooling for fast development.   | [Vitejs.dev](https://vitejs.dev/)                                         |
| **TypeScript**   | A strongly typed superset of JavaScript, enhancing code quality and maintainability.                 | [TypeScriptLang.org](https://www.typescriptlang.org/)                     |
| **Tailwind CSS** | A highly customizable, utility-first CSS framework for rapid UI development.  | [TailwindCSS.com](https://tailwindcss.com/)                               |
| **React Query**  | Powerful library for managing server state in React applications, handling fetching, caching, and updates.        | [TanStack Query](https://tanstack.com/query/latest)                       |
| **Axios**        | A popular promise-based HTTP client used for making API requests from the browser.        | [Axios GitHub](https://github.com/axios/axios)                            |
| **React Router** | Declarative routing solution for single-page React applications.              | [React Router](https://reactrouter.com/en/main)                           |
| **Vitest**       | A blazing fast unit test framework powered by Vite, providing a seamless testing experience.     | [Vitest.dev](https://vitest.dev/)                                         |
| **Playwright**   | A robust framework for reliable end-to-end testing across modern web browsers.         | [Playwright.dev](https://playwright.dev/)                                 |

### **Contributing**
We highly appreciate contributions to the Gato Frontend project! If you're interested in making this project even better, please follow these guidelines:

*   🍴 **Fork the Repository:** Begin by forking the project to your personal GitHub account.
*   🌱 **Create a New Branch:** Develop your feature or bug fix in a dedicated branch. Use a descriptive name like `feature/add-dark-mode` or `bugfix/resolve-login-issue`.
*   💡 **Implement Your Changes:** Write clean, well-documented code that adheres to the project's established coding style.
*   🧪 **Write Tests:** Ensure the stability of your contributions by adding appropriate unit and/or end-to-end tests for new features or bug fixes.
*   ⬆️ **Commit Your Changes:** Use clear and concise commit messages that summarize your modifications.
*   📬 **Open a Pull Request:** Submit a pull request to the `main` branch of this repository. Please include a detailed description of your changes and their purpose.

### **Author Info**

-   **Your Name**
    -   LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
    -   Portfolio: [Your Portfolio](https://yourportfolio.com)
    -   Twitter: [@YourTwitterHandle](https://twitter.com/YourTwitterHandle)

### **Badges**
[![Built With Vite](https://img.shields.io/badge/Built_With-Vite-purple?style=flat-square&logo=vite)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vitest](https://img.shields.io/badge/Tested_With-Vitest-6E9D0A?style=flat-square&logo=vitest&logoColor=white)](https://vitest.dev/)
[![Playwright](https://img.shields.io/badge/E2E_Tested_With-Playwright-2F80ED?style=flat-square&logo=playwright&logoColor=white)](https://playwright.dev/)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)