Created the project using Vite + React + TypeScript

```
npm create vite@latest todo-list
cd todo-list
npm install
```
Installed necessary dependencies:
```npm install react-redux @reduxjs/toolkit react-hook-form @mui/material @emotion/react @emotion/styled react-router-dom```

State Management with Redux Toolkit

1. Defined a taskSlice.ts file inside features/
2. Implemented addTask, deleteTask, and updateTask reducers
3. Integrated Redux into the app with a Store.ts file

Routing & Authentication

1. Used React Router to create routes (/login, /dashboard) and after login yo are redirected to the /dashboard
   (username : admin, password : password123)
3. Implemented basic authentication using localStorage

Form Handling with React Hook Form

1. Used react-hook-form to handle form validation efficiently
2. Applied TypeScript types to ensure form safety

UI Components with Material-UI & Tailwind CSS

1. Used MUI components like Card, Button, Typography for the task list
2. Styled the login and dashboard pages with Tailwind CSS
