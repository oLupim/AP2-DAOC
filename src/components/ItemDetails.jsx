export default function ItemDetails({ item, onClose }) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg w-80"
        onClick={(e) => e.stopPropagation()} // impede fechar ao clicar dentro
      >
        <h2 className="text-xl font-bold capitalize text-center mb-4">
          {item.name}
        </h2>

        {item.sprites?.front_default && (
          <img
            src={item.sprites.front_default}
            alt={item.name}
            className="mx-auto h-32"
          />
        )}

        <p className="text-sm mt-2">
          <strong>ID:</strong> {item.id}
        </p>
        <p className="text-sm">
          <strong>Altura:</strong> {item.height / 10} m
        </p>
        <p className="text-sm">
          <strong>Peso:</strong> {item.weight / 10} kg
        </p>

        <div className="mt-3">
          <strong>Tipos:</strong>
          <div className="flex flex-wrap gap-1 mt-1">
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

        <button
          onClick={onClose}
          className="mt-5 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}
