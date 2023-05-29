import { NavLink } from "react-router-dom";
import BrandLogo from "../../../assets/logo.png";
import { getMenu } from "../../../data";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { useState } from "react";
import MenuItems from "./MenuItems";

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isActiveMenu = () => {
    setShowMenu(!showMenu);
  };
  const menuItem = getMenu();
  return (
    <>
      <div className="flex gap-10 py-4 sm:justify-start justify-between">
        <img src={BrandLogo} alt="" className="w-[6rem]" />
        <ul className="sm:flex gap-4 hidden">
          {menuItem.map((menu) => (
            <li key={menu.id}>
              <NavLink className="text-xs" to={menu.navLink}>
                {menu.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <HiOutlineBars3BottomRight
          className={`sm:hidden text-xl cursor-pointer ${showMenu && "hidden"}`}
          onClick={() => isActiveMenu()}
        />
      </div>
      <MenuItems showMenu={showMenu} isActiveMenu={isActiveMenu} />
    </>
  );
};

export default Menu;
