import NoteItem from "./NoteItem";

export default function NoteList({ notes, onChangeNote, onDeleteNote }) {
    return (
        <>
            <h1>Note List</h1>
            <ul>
                {notes.map((note) => (
                    <li key={note.id}>
                        <NoteItem note={note} onChangeNote={onChangeNote} onDeleteNote={onDeleteNote} />
                    </li>
                ))}
            </ul>
        </>
    )
}