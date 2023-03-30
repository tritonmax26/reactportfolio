import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <h2 className="logo">StaN</h2>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about" end>About Me</NavLink>
          <NavLink to="/projects" end>Projects</NavLink>
          <NavLink to="/contact" end>Contact</NavLink>
        </nav>
      </div>
    </div>
  )
}

export default Navbar