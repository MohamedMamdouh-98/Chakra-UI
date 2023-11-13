import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//router dom
import { RouterProvider } from "react-router-dom";
import router from "./routes";
//ChakraProvider
import { ChakraProvider } from "@chakra-ui/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}></RouterProvider>
    </ChakraProvider>
  </React.StrictMode>
);
