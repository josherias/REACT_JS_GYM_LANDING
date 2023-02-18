import React from "react";

// import data
import { nav } from "../data";

const Nav = () => {
  return (
    <nav className="hidden lg:flex">
      <ul className="flex gap-x-8 text-white">
        {nav.map((item, idx) => {
          return (
            <li key={idx}>
              <span className="hover:text-primary-200 transition cursor-pointer">
                {item.name}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
