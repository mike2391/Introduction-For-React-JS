import { useState } from "react";
import { NotesDispatchContext } from "./NoteContext";
import { useContext } from "react";

export default function Note({ note }) {
  const [isEdit, setIsEdit] = useState(false);
  const dispatch = useContext(NotesDispatchContext);

  function handleChangeText(e) {
    dispatch({ ...note, type: "CHANGE_NOTE", text: e.target.value });
  }

  function handleChangeDone(e) {
    dispatch({ ...note, type: "CHANGE_NOTE", isEdit: e.target.checked });
  }

  function handleDelete() {
    dispatch({ type: "DELETE_NOTE", id: note.id });
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
      <button onClick={handleDelete}>Delete</button>
    </label>
  );
}
