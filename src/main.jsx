import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // your plain CSS
import { Provider } from "react-redux";
import { store } from "./store.js";
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <div className="root-container">
        <App />
        <Toaster position="top-right" />
      </div>
    </Provider>
  </StrictMode>
);
