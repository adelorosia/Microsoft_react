import { NavLink } from "react-router-dom"


const Showcase = () => {
  return (
    <section className="showcase flex flex-col justify-end items-center gap-4">
        <h2 className="font-bold">Surface Deals</h2>
        <p className="text-xs">Select Surface are on sale now - save while supplies last</p>
        <NavLink to='/' className="btn">Shop Now</NavLink>
      </section>
  )
}

export default Showcase
