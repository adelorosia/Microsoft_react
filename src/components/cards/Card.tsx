import { NavLink } from "react-router-dom";
import { getCard } from "../../data";
import React from "react";
import { ICardPosition } from "./ICardPosition";


const Card :React.FC<ICardPosition> = ({position}) => {
  const cardItem = getCard(position) ??[];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
      {cardItem.map((item) => (
        <div key={item.id}>
          <img src={item.imageUrl} alt="" className="w-full mb-4" />
          <h3 className="mb-2 font-bold">{item.title}</h3>
          <p className="text-sm mb-2">{item.desc}</p>
          <NavLink className='inline-block font-bold text-BLUE text-sm' to={item.navLink}>{item.navLinkName}</NavLink>
        </div>
      ))}
    </div>
  );
};

export default Card;
