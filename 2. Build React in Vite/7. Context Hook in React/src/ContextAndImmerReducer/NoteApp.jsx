// import { useReducer } from "react";
import { useImmerReducer } from "use-immer";
import { NotesContext, NotesDispatchContext } from "./NoteContext";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";

let id = 0;

const initialNotes = [
  { id: id++, text: "Learn React", isEdit: false },
  { id: id++, text: "Learn JavaScript", isEdit: false },
];

function noteReducerWithImmer(notes, action) {
  const index = notes.findIndex((note) => note.id === action.id);

  switch (action.type) {
    case "ADD_NOTE":
      notes.push({ id: id++, text: action.text, isDone: false });
      break;
    case "CHANGE_NOTE":
      notes[index].text = action.text;
      notes[index].isDone = action.isDone;
      break;
    case "DELETE_NOTE":
      notes.splice(index, 1);
      break;
    default:
      return notes;
  }
}

export default function NoteAppImmerReducer() {
  const [notes, dispatch] = useImmerReducer(noteReducerWithImmer, initialNotes);

  return (
    <>
      <NotesContext.Provider value={notes}>
        <NotesDispatchContext.Provider value={dispatch}>
          <NoteForm />
          <NoteList />
        </NotesDispatchContext.Provider>
      </NotesContext.Provider>
    </>
  );
}
