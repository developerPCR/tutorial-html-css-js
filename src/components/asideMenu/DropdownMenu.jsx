import  { useState } from "react";
import './asideMenu.css'

const DropdownMenu = ({title, children}) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return(
    <div className="dropdown">
      <button onClick={toggleMenu} className="dropdown-btn">
        {title} 
      </button>
      {isOpen && <pre className="dropdown-content">{children}</pre>}
    </div>
  )
}

export default DropdownMenu;
 //hola hola 