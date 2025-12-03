import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "./config/query-client";
import { ThemeProvider } from "./context/ThemeProvider";

import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);
