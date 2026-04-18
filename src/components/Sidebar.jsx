import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <NavLink to="/" className="sidebar-link">
          Home
        </NavLink>

        <NavLink to="/create" className="sidebar-link">
          Create a Crewmate!
        </NavLink>

        <NavLink to="/gallery" className="sidebar-link">
          Crewmate Gallery
        </NavLink>
      </nav>
    </aside>
  );
};