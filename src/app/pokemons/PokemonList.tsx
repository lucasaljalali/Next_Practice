import { IPokemon, IPokemonList } from "@/types/pokemon";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function PokemonList() {
  const [pokemonListData, setPokemonListData] = useState<IPokemon[] | null>(null);
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);
  const [pokemonCardData, setPokemonCardData] = useState<IPokemon | null>(null);
  const firstLetterUpper = (name: string) => name.charAt(0).toUpperCase() + name.slice(1);

  useEffect(() => {
    async function fetchListData() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = (await response.json()) as IPokemonList;
      setPokemonListData(data?.results);
      setSelectedPokemon(data?.results?.[0]?.name);
    }
    fetchListData();
  }, []);

  useEffect(() => {
    async function fetchCardData() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
      const data = (await response?.json()) as IPokemon;
      setPokemonCardData(data);
    }
    if (selectedPokemon) {
      fetchCardData();
    }
  }, [selectedPokemon]);

  return (
    <div className="p-5 flex flex-col items-center gap-8">
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
        {pokemonListData?.map((pokemon: IPokemon) => (
          <div
            key={pokemon?.name}
            onClick={() => setSelectedPokemon(pokemon?.name)}
            className="bg-stone-500 hover:bg-stone-600 p-2 rounded-xl flex item-align justify-center text-sm md:text-base cursor-pointer"
          >
            <span>{firstLetterUpper(pokemon?.name)}</span>
          </div>
        ))}
      </div>
      {pokemonCardData && (
        <div className="w-3/4 md:w-1/2 bg-stone-500/30 rounded-full relative">
          <Image src={pokemonCardData?.sprites?.front_default} alt="pokemon image" width={500} height={500} />
          <span className="absolute left-1/2 bottom-0 -translate-x-1/2 -translate-y-1/2 text-stone-500">
            {selectedPokemon && firstLetterUpper(selectedPokemon)}
          </span>
        </div>
      )}
    </div>
  );
}
