import { useState } from "react";

export default function NoteItem({ note, onChangeNote, onDeleteNote }) {
    const [isEdit, setIsEdit] = useState(false);

    function handleChangeText(e) {
        const newNote = { ...note, text: e.target.value };
        onChangeNote(newNote);
    }

    function handleChangeDone(e) {
        const newNote = { ...note, isDone: e.target.checked };
        onChangeNote(newNote);
    }

    let container;

    if (isEdit) {
        container = (
            <>
                <input type="text" value={note.text} onChange={handleChangeText} />
                <button onClick={() => setIsEdit(false)}>Save</button>
            </>
        );
    } else {
        container = (
            <>
                <p>{note.text}</p>
                <button onClick={() => setIsEdit(true)}>Edit</button>
            </>
        );
    }
    
    return (
        <>
            <label>
                <input type="checkbox" checked={note.isDone} onChange={handleChangeDone}/>
                {container}
                <button onClick={() => onDeleteNote(note)}>Delete</button>
            </label>
        </>
    )
}