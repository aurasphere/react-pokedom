import React, { Dispatch, SetStateAction } from "react";

export default React.createContext<
  [Pokedex, Dispatch<SetStateAction<Pokedex>>]
>([
  [],
  () =>
    console.warn(
      "You are outside of the Kanto region. Your Pokedex won't work!"
    ),
]);
