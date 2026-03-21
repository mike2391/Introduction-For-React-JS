import { useState } from "react";

function FormAddItem({ onAddItem }) {
  const [name, setName] = useState("");

  const [qty, setQty] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    // no need to declare property value when the value variable have same name with property name
    const newItem = { name, quantity: qty, checked: false, id: Date.now() };
    onAddItem(newItem);

    console.log(newItem);

    setName("");
    setQty(1);
  }

  const qtyNum = [...Array(20)].map((_, index) => (
    <option value={index + 1} key={index + 1}>
      {index + 1}
    </option>
  ));

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select value={qty} onChange={(e) => setQty(Number(e.target.value))}>
          {qtyNum}
        </select>
        <input type="text" placeholder="nama barang..." value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <button>Tambah</button>
    </form>
  );
}

export default FormAddItem;
