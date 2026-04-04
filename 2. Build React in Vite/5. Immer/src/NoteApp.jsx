import { useImmer } from "use-immer";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

let id = 0;
const initialData = [
  { id: id++, text: "Belajar JavaScript", isEdit: false },
  { id: id++, text: "Belajar react", isEdit: false },
];

export default function NoteApp() {
  const [notes, setNotes] = useImmer(initialData);

  function handleAddNote(text) {
    setNotes((draft) => {
      draft.push({ id: id++, text, isEdit: false });
    });
  }

  function handleChangeNote(note) {
    setNotes((draft) => {
      const index = draft.findIndex((n) => n.id === note.id);
      if (index !== -1) {
        draft[index] = { ...note };
      }
    });
  }

  function handleDeleteNote(note) {
    setNotes((draft) => {
      const index = draft.findIndex((n) => n.id === note.id);
      if (index !== -1) {
        draft.splice(index, 1);
      }
    });
  }

  return (
    <>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList notes={notes} onChangeNote={handleChangeNote} onDeleteNote={handleDeleteNote} />
    </>
  );
}
