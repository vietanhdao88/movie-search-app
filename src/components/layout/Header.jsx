import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex items-center justify-center gap-x-5 p-5 text-white">
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "text-primary" : "")}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "text-primary" : "")}
        to={"/movie"}
      >
        Movies
      </NavLink>
    </div>
  );
};

export default Header;
