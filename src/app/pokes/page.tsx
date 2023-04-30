"use client";

import Link from "next/link";
import PokemonList from "./PokemonList";

export default function Pokes() {
  return (
    <div className="pageContainer">
      <PokemonList />
      <Link href="/">Back to Home</Link>
    </div>
  );
}
