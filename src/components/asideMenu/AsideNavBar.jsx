import React from "react";
import DropdownMenu from "./DropdownMenu";

function AsideNavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <DropdownMenu title="Dropdown">
              <a href="/home" className="dropdown-link">
                link 1
              </a>
              
            <a href="/" className="dropdown-link">
              Link 2
            </a>
            <a href="/" className="dropdown-link">
              Link 3
            </a>
          </DropdownMenu>
        </li>
      </ul>
    </nav>
  );
}

export default AsideNavBar;
