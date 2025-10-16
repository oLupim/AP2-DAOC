import { useEffect, useState } from "react";
import { getPokemons, getPokemonByName } from "../services/api";
import SearchForm from "../components/SearchForm";
import ItemList from "../components/ItemList";
import ItemDetails from "../components/ItemDetails";
import LoadingSpinner from "../components/LoadingSpinner";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Carrega a lista inicial de Pokémons
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const data = await getPokemons();
      setPokemons(data);
      setLoading(false);
    }
    loadData();
  }, []);

  // Buscar Pokémon pelo nome
  async function handleSearch(e) {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (search.trim() === "") {
      const data = await getPokemons();
      setPokemons(data);
      setLoading(false);
      return;
    }

    const result = await getPokemonByName(search);
    if (result) {
      setPokemons([result]);
    } else {
      setError("Pokémon não encontrado");
      setPokemons([]);
    }

    setLoading(false);
  }

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">PokéCatálogo</h1>

      {/* Formulário de busca */}
      <SearchForm
        value={search}
        onChange={setSearch}
        onSubmit={handleSearch}
      />

      {/* Erro */}
      {error && (
        <p className="text-center text-red-500 mt-3">{error}</p>
      )}

      {/* Loading */}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <ItemList items={pokemons} onSelect={setSelected} />
      )}

      {/* Modal de detalhes */}
      <ItemDetails item={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
