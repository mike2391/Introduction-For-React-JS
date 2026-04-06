import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ProfileContext } from "./ProfileContext.jsx";
import Profile from "./Profile.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Context is a way to pass data through the component tree without having to pass props down manually at every level */}
    {/* You can't pass data to a component that is not a child of a context provider */}
    {/* You also can't pass context which locate:
          1. outside of context provider
          2. at the same level (sibling)
          3. above the context provider (child->parent)
     */}
    <ProfileContext.Provider value="Yanto">
      <h1>Profile App</h1>
      <Profile />
    </ProfileContext.Provider>
  </StrictMode>,
);
