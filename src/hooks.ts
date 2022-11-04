import { useContext } from "react";
import pokedomContext from "./context";

const pokemons = require("json-pokemon");

export function usePokedex(): Pokedex {
  const [pokedex] = useContext(pokedomContext);
  return JSON.parse(JSON.stringify(pokedex));
}

export function usePokeball(
  callback?: (e: PokedomEvent) => void
): (event: Event) => void {
  const [pokedex, setPokedex] = useContext(pokedomContext);
  return (event?: Event) => {
    const pokedomEvent = (event ?? {}) as PokedomEvent;
    if (Math.random() * 10 < 4) {
      // Pokemon caught!
      const pokemon = pokemons[(pokemons.length * Math.random()) | 0];
      pokedomEvent.pokemon = pokemon;

      // Adds the pokemon to the pokedex
      const pokedexEntry = pokedex.find((entry) => entry.id === pokemon.id);
      if (pokedexEntry) {
        pokedexEntry.owned++;
      } else {
        const newPokedexEntry = { ...pokemon } as PokedexEntry;
        newPokedexEntry.owned = 1;
        pokedex.push(newPokedexEntry);
        pokedex.sort((a, b) => a.id - b.id);
        setPokedex([...pokedex]);
      }
    }
    callback?.(pokedomEvent);
  };
}
