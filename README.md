# React Pokedom

Gotta catch 'em all!

A React library for catching Pokémon alongside your DOM events.

## Quickstart

To catch a Pokémon you use the `usePokeball` hook. This hook returns a function that you can pass as a DOM event callback:

    import { usePokeball } from '@aurasphere/react-pokedom';
    // ...
    const pokeball = usePokeball();
    //...
    <button onClick={pokeball}>Try to catch a Pokemon!</button>

You can also pass a function as an argument to the hook. If you do so, your function will be invoked with the DOM event (with an additional `pokemon` field if you caught one):

    const myCallback = event => {
        if (event.pokemon) {
            console.log("Pokemon caught!");
        }
    }
    const pokeball = usePokeball(myCallback);

To see all your Pokémons you can use the `usePokedex` hook which returns an array:

takes an optional callback function as an argument which will be invoked with the DOM event. The event will contain a `pokemon` field if one has been caught.

To view the Pokémon you caught so far, you can use the `usePokedex` hook which returns an array. However, this hook only works in the Pokémon world, so you have to wrap your application in the `<KantoRegion>` tag:

    // index.js
    import { KantoRegion } from '@aurasphere/react-pokedom';
    // ...
    <KantoRegion>
        <MyComponent />
    </KantoRegion>

    // my-component.js
    import { usePokedex } from '@aurasphere/react-pokedom';
    // ...
    const pokedex = usePokedex();

## API

### Hooks

    function usePokedex(): Pokedex;
    function usePokeball(callback?: (e: PokedomEvent) => void): (event: Event) => void;

### Types

See https://github.com/aurasphere/react-pokedom/blob/main/src/types.ts.
