import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeProvider.jsx";
import { TodoProvider } from "./context/TodoProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <TodoProvider>
        <BrowserRouter>
          <ToastContainer />
          <App />
        </BrowserRouter>
      </TodoProvider>
    </ThemeProvider>
  </React.StrictMode>
);
