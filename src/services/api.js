const BASE_URL = "https://pokeapi.co/api/v2";

// Função para buscar vários Pokémons
export async function getPokemons(limit = 20, offset = 0) {
  try {
    const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
    const data = await response.json();

    // Buscar detalhes de cada Pokémon (nome, imagem, tipo)
    const pokemons = await Promise.all(
      data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        return res.json();
      })
    );

    return pokemons;
  } catch (error) {
    console.error("Erro ao buscar Pokémons:", error);
    return [];
  }
}

// Função para buscar Pokémon pelo nome
export async function getPokemonByName(name) {
  try {
    const response = await fetch(`${BASE_URL}/pokemon/${name.toLowerCase()}`);
    if (!response.ok) {
      throw new Error("Pokémon não encontrado");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar Pokémon:", error);
    return null;
  }
}
