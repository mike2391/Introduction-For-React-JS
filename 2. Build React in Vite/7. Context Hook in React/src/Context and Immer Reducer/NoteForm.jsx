import { useContext } from "react";
import { useState } from "react";
import { NotesDispatchContext } from "./NoteContext";

export default function NoteForm() {
  const [text, setText] = useState("");
  const dispatch = useContext(NotesDispatchContext);

  return (
    <>
      <h1>Note Form</h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter a new note..." />
      <button
        onClick={() => {
          dispatch({ type: "ADD_NOTE", text: text });
          setText("");
        }}>
        Add Note
      </button>
    </>
  );
}
