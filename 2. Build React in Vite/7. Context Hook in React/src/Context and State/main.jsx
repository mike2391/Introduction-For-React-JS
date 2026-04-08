import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ProfileApp from "./ProfileApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProfileApp />
  </StrictMode>,
);
