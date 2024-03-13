import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.jsx";
import { ProviderWrapper } from "./ProviderWrapper.jsx";

import "normalize.css";
import "@radix-ui/themes/styles.css";
import "./styles/App.scss";
import "./styles/root.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <ProviderWrapper>
                <App />
            </ProviderWrapper>
        </BrowserRouter>
    </React.StrictMode>,
);
