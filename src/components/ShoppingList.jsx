import ShoppingItem from "./ShoppingItem";

function ShoppingList({ items, onToggle, onUpdateQuantity }) {
  return (
    <section>
      <h2>Handleliste</h2>
      <ul>
        {items.map(item => (
          <ShoppingItem
            key={item.id}
            item={item}
            onToggle={onToggle}
            onUpdateQuantity={onUpdateQuantity}
          />
        ))}
      </ul>
    </section>
  );
}

export default ShoppingList;
