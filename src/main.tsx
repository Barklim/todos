import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./index.css";
import { ContextProvider } from "./app/providers/ContextProvider/index.tsx";

export const theme = extendTheme({
  fonts: {
    body: "'Roboto', sans-serif",
  },
});

const container = document.getElementById("root");

if (!container) {
  throw new Error(
    "The root container was not found. Failed to mount react application"
  );
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <ContextProvider>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </ContextProvider>
  </React.StrictMode>
);
