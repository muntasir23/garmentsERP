import "./main.css";
import 'react-toastify/ReactToastify.css'
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from './store/store'
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <NextUIProvider>
        <Router>
          <App />
          <ToastContainer />
        </Router>
      </NextUIProvider>
    </Provider>
  </React.StrictMode>,
);
