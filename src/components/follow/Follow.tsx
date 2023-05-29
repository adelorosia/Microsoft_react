import { NavLink } from 'react-router-dom'
import Facebook from '../../assets/social-fb.png'
import Twitter from '../../assets/social-twitter.png'
import Linkedin from '../../assets/social-linkedin.png'

const Follow = () => {
  return (
    <section className="flex gap-4 items-center mb-10">
    <p className='font-bold'>Follow Microsoft</p>
    <NavLink to="/">
        <img src={Facebook} alt="" />
    </NavLink>
    <NavLink to="/">
        <img src={Twitter} alt="" />
    </NavLink>
    <NavLink to="/">
        <img src={Linkedin} alt="" />
    </NavLink>
  </section>
  )
}

export default Follow
