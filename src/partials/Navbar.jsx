import { PcCase } from "lucide-react"
import { BookUser } from "lucide-react"
import { User } from "lucide-react"
import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <div>
        <div className="navbar bg-base-200">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl space-x-1">
        <div className="avatar">
            <div className="w-6 rounded-lg"  >
                <img src="foto.jpeg" alt="" />
            </div>
        </div>
        <span>Oswald Mogot</span>
        </a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li>
            <NavLink to={'/'}>
            <User size={16} />
            Profile
            </NavLink> 
        </li>
        <li>
            <NavLink to={'/project'}>
            <PcCase size={16} />
            Project
            </NavLink> 
        </li>
        <li>
            <NavLink to={'/contact'}>
            <BookUser size={16} />
            Contact
            </NavLink> 
        </li>
      </ul>
    </div>
  </div>
  </div>
  )
}

export default Navbar