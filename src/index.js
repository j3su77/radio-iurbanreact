import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./context/Context";
import "animate.css"

import 'swiper/swiper.min.css';

import 'swiper/components/pagination/pagination.min.css';





ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
