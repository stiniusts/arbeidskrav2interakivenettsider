import { useState } from "react";

function AddForm(props) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (name === "" || quantity === "") {
      alert("Du må fylle inn både vare og antall!");
      return;
    }

    props.onAdd(name, quantity);

    setName("");
    setQuantity("");
  }

  return (
    <section>
      <h2>Legg til vare</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Vare:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <label>
          Antall:
          <input
            type="number"
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
          />
        </label>

        <button type="submit">Legg til</button>
      </form>
    </section>
  );
}

export default AddForm;