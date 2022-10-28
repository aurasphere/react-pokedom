import React from "react";
import PokedomContext from "../../context";

export default function KantoRegion({
  children,
}: React.PropsWithChildren<never>) {
  return (
    <PokedomContext.Provider value={[]}>{children}</PokedomContext.Provider>
  );
}
