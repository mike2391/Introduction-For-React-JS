import { useState } from "react";

export default function NoteForm({ onAddNote, name }) {
    const [text, setText] = useState("");

    return (
        <>
            <h2>Note Form - {name}</h2>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={() => {onAddNote(text); setText("");}}>
                Add Note
            </button>
        </>
    )
}