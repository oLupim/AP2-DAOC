export default function ItemCard({ item, onSelect }) {
  return (
    <div
      onClick={() => onSelect(item)}
      className="bg-white border rounded-lg p-4 text-center cursor-pointer hover:bg-gray-100"
    >
      {/* Imagem do Pokémon */}
      <img
        src={item.sprites?.front_default}
        alt={item.name}
        className="mx-auto w-24 h-24 object-contain"
      />

      {/* Nome e ID */}
      <h3 className="mt-2 font-semibold capitalize">{item.name}</h3>
      <p className="text-sm text-gray-500">ID: {item.id}</p>

      {/* Tipos */}
      <div className="mt-2 flex justify-center gap-2 flex-wrap">
        {item.types?.map((t) => (
          <span
            key={t.type.name}
            className="text-xs bg-gray-200 px-2 py-1 rounded-full"
          >
            {t.type.name}
          </span>
        ))}
      </div>
    </div>
  );
}
