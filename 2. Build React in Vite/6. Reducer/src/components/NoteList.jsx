import Note from "./Note";

export default function NoteList({ notes, onChange, onDelete }) {
  return (
    <>
      <h2>Note List</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Note key={note.id} note={note} onChange={onChange} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </>
  );
}
