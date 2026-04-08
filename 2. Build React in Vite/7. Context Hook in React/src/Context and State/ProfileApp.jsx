import { ProfileContext } from "./ProfileContext.jsx";
import Profile from "./Profile.jsx";
import { useState } from "react";
import ProfileForm from "./ProfileForm.jsx";

export default function ProfileApp() {
  const [name, setName] = useState("Yanto");

  // You can combine state and context to make a stateful context
  // But you need to put the state in the parent file

  // Stateful = a state that can be updated

  // Just use context if the state become too complex
  // as long you can use props, just use props. don't use context for something simple

  return (
    <ProfileContext.Provider value={name}>
      <h1>Profile App</h1>
      <ProfileForm name={name} setName={setName} />
      <Profile />
    </ProfileContext.Provider>
  );
}
