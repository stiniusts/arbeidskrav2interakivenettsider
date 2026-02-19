import { useState } from "react";

function AddForm({ onAdd }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name && !quantity) {
      setError("Du må fylle inn både vare og antall.");
      return;
    }

    if (!name) {
      setError("Du må skrive inn navn på varen.");
      return;
    }

    if (!quantity) {
      setError("Du må skrive inn antall.");
      return;
    }

    if (Number(quantity) < 1) {
      setError("Antall må være minst 1.");
      return;
    }

    onAdd(name, quantity);
    setName("");
    setQuantity("");
    setError("");
  };

  return (
    <section>
      <h2>Legg til vare</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Vare:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Antall:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>

        <button type="submit">Legg til</button>
      </form>

      {error && <p>{error}</p>}
    </section>
  );
}

export default AddForm;
