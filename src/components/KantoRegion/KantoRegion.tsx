import React, { useState } from "react";
import PokedomContext from "../../context";

export default function KantoRegion({
  children,
}: React.PropsWithChildren<never>): JSX.Element {
  const state = useState<Pokedex>([]);
  return (
    <PokedomContext.Provider value={state}>{children}</PokedomContext.Provider>
  );
}
