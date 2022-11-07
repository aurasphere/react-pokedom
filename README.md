[![Github Workflow](https://img.shields.io/github/workflow/status/aurasphere/react-pokedom/CI)](https://github.com/aurasphere/react-pokedom/actions/workflows/node.js.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/819c60dd2987fa97ba95/maintainability)](https://codeclimate.com/github/aurasphere/react-pokedom/maintainability)
[![Donate](https://img.shields.io/badge/Donate-PayPal-orange.svg)](https://www.paypal.com/donate/?cmd=_donations&business=8UK2BZP2K8NSS)
[![Telegram](https://img.shields.io/badge/-telegram-a?color=white&logo=telegram)](https://t.me/+Wy1DPTLyFGg0OWE0)



<img align="left" src="/assets/react-pokedom-logo.png" alt="react-pokedom-logo" height="100" />

# React Pokedom
<sup>Gotta catch 'em all!</sup>


A React library for catching Pokémon alongside your DOM events. There are more than 800 Pokémon hiding in your DOM. Can you catch them all?

## Quickstart

<sub><sup>**DISCLAMER**: catching Pokémons of type _bug_ may infect your application with the Pokérus virus which will turn your computer into a Pokédollar crypto miner. We decline any responsibility.</sub></sup>

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
