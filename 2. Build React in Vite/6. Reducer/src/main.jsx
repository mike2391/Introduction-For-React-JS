import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NoteAppImmerReducer from "./ImmerReducer";
import NoteAppReducer from "./Reducer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* i give you 2 reducer options, one is with ImmerReducer and the other one is with Reducer */}

    <NoteAppImmerReducer name="With ImmerReducer" />
    <NoteAppReducer name="With Reducer" />
  </StrictMode>,
);
