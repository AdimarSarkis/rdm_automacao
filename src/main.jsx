import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/index.jsx";
import Home from "./pages/Home";
import PageDownload from "./pages/PageDownload";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PageDownload />
    </BrowserRouter>
  </React.StrictMode>
);
