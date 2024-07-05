import React from "react";
import ReactDOM from "react-dom";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App"
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext.jsx";
import { ToastContainer } from "react-toastify";
import { BookmarkProvider } from "./Contexts/BookmarkContext.jsx";


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BookmarkProvider>
        <BrowserRouter>
        <ToastContainer />
            <App />
        </BrowserRouter>
      </BookmarkProvider>
    </AuthProvider>
  </React.StrictMode>
);
