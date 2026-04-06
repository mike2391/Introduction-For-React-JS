import { useContext } from "react";
import NoteItem from "./NoteItem";
import { NotesContext } from "./NoteContext";

export default function NoteList() {
  const notes = useContext(NotesContext);

  return (
    <>
      <h2>Note List</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <NoteItem note={note} />
          </li>
        ))}
      </ul>
    </>
  );
}
