import { getLinkItems } from "../../data";
import { NavLink } from "react-router-dom";

const Links = () => {
  const linkItems = getLinkItems();
  return (
    <section className=" bg-gray-200 p-5">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {linkItems.map((links) => (
          <ul key={links.id}>
            <li>
              <h3 className="font-bold">{links.title}</h3>
            </li>
            <li>
              <NavLink to="/">{links.link1}</NavLink>
            </li>
            <li>
              <NavLink to="/">{links.link2}</NavLink>
            </li>
            <li>
              <NavLink to="/">{links.link3}</NavLink>
            </li>
            <li>
              <NavLink to="/">{links.link4}</NavLink>
            </li>
            <li>
              <NavLink to="/">{links.link5}</NavLink>
            </li>
          </ul>
        ))}
      </div>
    </section>
  );
};

export default Links;
