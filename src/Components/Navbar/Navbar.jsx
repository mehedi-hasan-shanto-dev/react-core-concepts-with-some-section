import React, { useState } from "react";
import Linked from "./Linked";
import { Menu, X } from "lucide-react";

const navigationData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Countries", path: "/countries" },
  { id: 4, name: "Services", path: "/services" },
  { id: 5, name: "Contact", path: "/contact" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = navigationData.map((route) => (
    <Linked route={route} key={route.id}></Linked>
  ));
  return (
    <div>
      <nav className="flex justify-between mx-10 text-black mt-10">
        <span className="flex" onClick={() => setOpen(!open)}>
          {open ? (
            <X className="md:hidden" />
          ) : (
            <Menu className="md:hidden"></Menu>
          )}

          <ul
            className={`md:hidden absolute duration-1000
            ${open ? " top-20 " : "-top-40"} bg-amber-500`}
          >
            {links}
          </ul>

          <h3 className="ml-5">MyNavbar</h3>
        </span>
        <ul className="md:flex hidden">{links}</ul>

        {/* <ul className="flex">
          {navigationData.map((route) => (
            <li className="mr-10">
              <a href={route.path}>{route.name}</a>
            </li>
          ))}
        </ul> */}

        {/* <ul className="flex">
          <li className="mr-10">
            <a href="/">Home</a>
          </li>
          <li className="mr-10">
            <a href="/About">About</a>
          </li>
          <li className="mr-10">
            <a href="/Contact">Contact</a>
          </li>
          <li className="mr-10">
            <a href="/Blog">Blog</a>
          </li>
        </ul> */}
        <button>Sign In </button>
      </nav>
    </div>
  );
};

export default Navbar;
