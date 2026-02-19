
function ShoppingItem({ item, onToggle, onUpdateQuantity }) {
  return (
    <li>
      <label style={{ textDecoration: item.bought ? "line-through" : "none" }}>
        <input
          type="checkbox"
          checked={item.bought}
          onChange={() => onToggle(item.id)}
        />
        {item.name}
      </label>

      <input
        type="number"
        min="1"
        value={item.quantity}
        onChange={(e) =>
          onUpdateQuantity(item.id, Number(e.target.value))
        }
      />
    </li>
  );
}

export default ShoppingItem;
