import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile/:id", name: "Profile" },
  ];
  return (
    <nav>
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open === true ? (
          <AiOutlineMenu></AiOutlineMenu>
        ) : (
          <IoMdClose></IoMdClose>
        )}
      </div>
      <ul className="flex">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
