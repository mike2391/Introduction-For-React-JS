import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NoteAppImmerReducer from "./NoteApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NoteAppImmerReducer />
  </StrictMode>,
);
