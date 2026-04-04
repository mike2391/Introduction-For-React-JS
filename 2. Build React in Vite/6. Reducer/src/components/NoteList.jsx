import NoteItem from "./NoteItem";

export default function NoteList({ notes, onChange, onDelete }) {
  return (
    <>
      <h2>Note List</h2>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <NoteItem note={note} onChange={onChange} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </>
  );
}
