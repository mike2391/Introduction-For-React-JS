import { useState } from "react";
import Header from "./components/Header";
import FormAddItem from "./components/Form";
import GroceryList from "./components/GroceryList";
import Footer from "./components/Footer";

const groceryItems = [
  {
    id: 1,
    name: "Kopi Bubuk",
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: "Gula Pasir",
    quantity: 5,
    checked: false,
  },
  {
    id: 3,
    name: "Air Mineral",
    quantity: 3,
    checked: false,
  },
];

export default function App() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item) {
    // common method
    // setItems([...items, item]);

    // safest method
    // React fill variable prevItems with previous state value, and then React Add new value [item] and send it back to variable items
    setItems((prevItems) => [...prevItems, item]);
  }

  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, checked: !item.checked } : item)));
  }

  function handleClearAll() {
    setItems([]);
  }

  return (
    <div className="app">
      <Header />
      <FormAddItem onAddItem={handleAddItem} />
      <GroceryList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearAll={handleClearAll} />
      <Footer items={items} />
    </div>
  );
}
