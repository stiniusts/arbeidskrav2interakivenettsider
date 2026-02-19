import { useState } from "react";
import AddForm from "./components/AddForm";
import ShoppingList from "./components/Shoppinglist";
import "./App.css";

function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Melk", quantity: 2, bought: false },
    { id: 2, name: "Egg", quantity: 1, bought: true }
  ]);

  const addItem = (name, quantity) => {
    const newItem = {
      id: Date.now(),
      name,
      quantity: Number(quantity),
      bought: false
    };

    setItems(prev => [newItem, ...prev]);
  };

  const toggleBought = (id) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    );
  };

  const updateQuantity = (id, value) => {
    if (value < 1) return;

    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: value } : item
      )
    );
  };

  return (
    <main>
      <section className="card">
        <h1>Handleliste</h1>

        <AddForm onAdd={addItem} />

        <ShoppingList
          items={items}
          onToggle={toggleBought}
          onUpdateQuantity={updateQuantity}
        />
      </section>
    </main>
  );
}

export default App;

