import { useContext, useMemo, useRef, useState } from "react";
import NoteItem from "./NoteItem";
import { NotesContext } from "./NoteContext";

export default function NoteList() {
  const notes = useContext(NotesContext);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  // Memo/Memoization is optimization technique to prevent unnecessary re-renders
  // When the value of a variable doesn't change, React will not re-render the component.
  // If the value of a variable changes, React will re-render the component.
  // Memo is a part of Performance Hook

  // In this code example, we are using useMemo to memoize the filteredNotes variable.
  // Memo will run again only when the value of the notes or search variable changes.
  // default form of Memo -> useMemo(() => callback, [dependencies])
  const filteredNotes = useMemo(() => {
    console.info("filter notes");
    return notes.filter((note) => note.text.includes(search));
  }, [notes, search]);

  return (
    <>
      <br />
      <input type="text" placeholder="search" ref={searchInput} />
      <button onClick={() => { setSearch(searchInput.current.value);  console.info("search notes")}}>Search</button>
      <br />
      <h2>Note List</h2>
      <ul>
        {filteredNotes.map((note) => (
          <li key={note.id}>
            <NoteItem note={note} />
          </li>
        ))}
      </ul>
    </>
  );
}
