import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

//icons
import "@/assets/vendor/fonts/fontawesome.css";
import "@/assets/vendor/fonts/tabler-icons.css";
import "@/assets/vendor/fonts/flag-icons.css";

//core css
import "@/assets/vendor/css/rtl/core.css";
import "@/assets/vendor/css/rtl/theme-default.css";
import "@/assets/vendor/css/demo.css";
import "@/assets/vendor/fonts/flag-icons.css";
import "@/assets/vendor/css/rtl/theme-semi-dark.css";

//pages
import "@/assets/vendor/css/pages/cards-advance.css";
import "@/assets/vendor/css/rtl/custom-style.css";
import "@/assets/vendor/js/bootstrap.js";

//custom
import "@/assets/css/custom-style.css";

import "sweetalert2/dist/sweetalert2.min.css";
import "@/assets/vendor/libs/spinkit/spinkit.css";
import "@/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
