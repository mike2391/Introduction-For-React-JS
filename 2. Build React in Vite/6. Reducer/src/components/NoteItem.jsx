import { useState } from "react";

export default function Note({ note, onChange, onDelete }) {
  const [isEdit, setIsEdit] = useState(false);

  function handleChangeText(e) {
    onChange({ ...note, text: e.target.value });
  }

  function handleChangeDone(e) {
    onChange({ ...note, isEdit: e.target.checked });
  }

  let component;

  if (isEdit) {
    component = (
      <>
        <input type="text" onChange={handleChangeText} value={note.text} />
        <button onClick={() => setIsEdit(false)}>Save</button>
      </>
    );
  } else {
    component = (
      <>
        <p>{note.text}</p>
        <button onClick={() => setIsEdit(true)}>Edit</button>
      </>
    );
  }

  return (
    <label>
      <input type="checkbox" checked={note.isEdit} onChange={handleChangeDone} />
      {component}
      <button onClick={() => onDelete(note)}>Delete</button>
    </label>
  );
}
