import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function DropdownMenu() {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const navs = [
      { name: "Login", path: "/login" },
      { name: "Orders", path: "/myorders" },
      { name: "Logout", path: "/login" },
    ];
    setNavLinks(navs);
  }, []);

  return (
    <div className="dropdown">
      <button
        className="btn btn-link dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Menu
      </button>
      <div className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
        {navLinks.map((d, i) => (
          <Link key={i} to={d.path} className="dropdown-item">
            {d.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DropdownMenu;
