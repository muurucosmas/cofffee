import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    // Fixed the broken class string here
    <nav className="bg-amber-800 w-full flex justify-between flex-row p-4">
      <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600" : "text-white"}>
        Home
      </NavLink>

      <NavLink to="/add-product" className={({ isActive }) => isActive ? "text-blue-600" : "text-white"}>
        Add Coffee
      </NavLink>

      <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-blue-600" : "text-white"}>
        Dashboard
      </NavLink>
    </nav>
  );
}
