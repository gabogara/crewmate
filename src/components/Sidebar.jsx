import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside>
      <nav>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/create">Create a Crewmate!</NavLink>

        <NavLink to="/gallery">Crewmate Gallery</NavLink>
      </nav>
    </aside>
  );
};