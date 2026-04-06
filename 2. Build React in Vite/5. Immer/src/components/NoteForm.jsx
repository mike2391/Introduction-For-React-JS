import { useState } from "react";

export default function NoteForm({ onAddNote }) {
  const [text, setText] = useState("");

  return (
    <>
      <h1>Note Form</h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter a new note..." />
      <button onClick={() => onAddNote(text)}>Add Note</button>
    </>
  );
}
