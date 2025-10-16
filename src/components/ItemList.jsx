import ItemCard from "./ItemCard";

export default function ItemList({ items, onSelect }) {
  if (!items || items.length === 0) {
    return <p className="text-center text-gray-500">Nenhum Pokémon encontrado.</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} onSelect={onSelect} />
      ))}
    </div>
  );
}
