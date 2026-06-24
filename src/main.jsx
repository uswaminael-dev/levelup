import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { Toaster } from "react-hot-toast";
import TaskProvider from "./context/TaskContext";
import ThemeProvider from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <TaskProvider>
        <Toaster position="top-right"/>
        <App />
      </TaskProvider>
    </ThemeProvider>
  </React.StrictMode>
);