import { NavLink } from "react-router-dom";
import { getMenu } from "../../../data";
import { IoClose } from "react-icons/io5";
import React from "react";
import { IShowMenu } from "./IShowMenu";

const MenuItems:React.FC<IShowMenu> = ({ showMenu, isActiveMenu }) => {
  const menuItem = getMenu();
  return (
    <div
      className={`sm:hidden flex flex-col gap-10 bg-PRIMARY/70 fixed inset-0 items-center justify-center backdrop-blur-sm ${
        showMenu ? "" : "hidden"
      }`}
    >
      <IoClose className=' cursor-pointer text-WHITE text-3xl' onClick={() => isActiveMenu()} />
      <ul className="flex flex-col gap-10 text-5xl text-WHITE justify-center items-center">
        {menuItem.map((menu) => (
          <li key={menu.id} className="">
            <NavLink className="text-xl font-bold" to={menu.navLink} onClick={()=>isActiveMenu()}>
              {menu.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItems;
