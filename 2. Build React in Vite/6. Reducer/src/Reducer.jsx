// import { useReducer } from "react";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import { useReducer } from "react";

let id = 0;

const initialNotes = [
    { id: id++, text: "Learn React", isEdit: false },
    { id: id++, text: "Learn JavaScript", isEdit: false },
];

function noteReducer(notes, action) {
    switch (action.type) {
        case "ADD_NOTE":
            return [...notes, { id: id++, text: action.text, isDone: false }];
        
        case "CHANGE_NOTE":
            return notes.map((note) => {
                if (note.id === action.id) {
                    return { ...note, text: action.text, isDone: action.isDone };
                }
                return note;
            });
        
        case "DELETE_NOTE":
            return notes.filter((note) => note.id !== action.id);
            
        default:
            return notes;
    }
}

export default function NoteAppReducer({name}) {
    // you can use different name "dispatch" if you want, but best practice is use "dispatch"
    const [notes, dispatch] = useReducer(noteReducer, initialNotes);

    function handleAddNote(text) {
        dispatch({ type: "ADD_NOTE", text });
    }

    function handleChangeNote(note) {
        dispatch({ type: "CHANGE_NOTE", ...note });
    }

    function handleDeleteNote(note) {
        dispatch({ type: "DELETE_NOTE", id: note.id });
    }

    return (
        <>
        <NoteForm onAddNote={handleAddNote} name={name}/>
        <NoteList notes={notes} onChange={handleChangeNote} onDelete={handleDeleteNote} />
        </>
    );
}
