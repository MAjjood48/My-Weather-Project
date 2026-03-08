import React from "react";

import ReactDOM from "react-dom/client";

// importing the main component
import App from "./App";

import "./App.css";

// selecting the div where app will render - exists in index.html
ReactDOM.createRoot(document.getElementById("root")).render(

  // StrictMode helps me find problems during development - doesnt affect production
  <React.StrictMode>
    {/* rendering the main component */}
    <App />
  </React.StrictMode>
);
