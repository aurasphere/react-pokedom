type Pokedex = PokedexEntry[];

interface PokedexEntry extends Pokemon {
  owned: number;
}

interface PokedomEvent extends Event {
  pokemon: Pokemon;
}

interface Pokemon {
  id: number;
  name: string;
  typeList: string[];
}
