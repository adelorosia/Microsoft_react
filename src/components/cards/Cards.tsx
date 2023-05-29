import React from "react";
import Card from "./Card";
import { ICardPosition } from "./ICardPosition";

const Cards: React.FC<ICardPosition> = ({ position }) => {
  return (
    <section className="mb-3">
      <Card position={position} />
    </section>
  );
};

export default Cards;
