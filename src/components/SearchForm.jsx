export default function SearchForm({ value, onChange, onSubmit }) {
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col sm:flex-row items-center gap-2 mt-4"
    >
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar Pokémon..."
        className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Buscar
      </button>
    </form>
  );
}
