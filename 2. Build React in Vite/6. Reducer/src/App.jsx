// import { useReducer } from "react";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import { useImmer } from "use-immer";

let id = 0;

const initialNotes = [
  { id: id++, text: "Learn React", isEdit: false },
  { id: id++, text: "Learn JavaScript", isEdit: false },
];

export default function NoteApp() {
  // function noteReducer(state, action) {}

  // const [notes, dispatch] = useReducer(noteReducer, initialNotes);

  const [notes, setNotes] = useImmer(initialNotes);

  function handleAddNote(text) {
    setNotes((draft) => {
      draft.push({ id: id++, text, isEdit: false });
    });
  }

  function handleChangeNote(note) {
    setNotes((draft) => {
      const index = draft.findIndex((item) => item.id === note.id);
      draft[index] = note;
    });
  }

  function handleDeleteNote(note) {
    setNotes((draft) => {
      const index = draft.findIndex((item) => item.id === note.id);
      draft.splice(index, 1);
    });
  }

  return (
    <>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList notes={notes} onChange={handleChangeNote} onDelete={handleDeleteNote} />
    </>
  );
}
