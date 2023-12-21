import React from "react";
import { Link, NavLink } from "react-router-dom";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  return (
    <header className="bg h-[60px] flex items-center relative">
      <div className="baseContainer flex justify-between items-center ">
        <Link className="font-bold text-2xl bg-drakBg" to="/">
          LOGO
        </Link>
        <div className="Menu flex gap-2 font-semibold capitalize ">
          <NavLink
            className={({ isActive }) =>
              `navLink ${isActive && "bg-red-400"}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `navLink ${isActive && "bg-red-400"}`
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `navLink ${isActive && "bg-red-400"}`
            }
            to="/contact"
          >
            contact
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `navLink ${isActive && "bg-red-400"}`
            }
            to="/services"
          >
            services
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `navLink ${isActive && "bg-red-400"}`
            }
            to="/projects"
          >
            projects
          </NavLink>
        </div>
        <div>
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
};

export default Header;
