import { IPokemon, IPokemonList } from "@/types/pokemon";
import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemonData, setPokemonData] = useState<IPokemon[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = (await response.json()) as IPokemonList;
      setPokemonData(data.results);
      console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemonData.map((pokemon: IPokemon) => (
          <li key={pokemon.name}>
            <a href={pokemon.url}>{pokemon.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
