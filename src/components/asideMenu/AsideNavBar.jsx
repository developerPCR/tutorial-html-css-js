import React from "react";
import DropdownMenu from "./DropdownMenu";

import { Route } from "react-router-dom"; //esto lo escribí yo y es para hacer las rutas
import { RouteRefrenceHTML } from "./RouteRefrenceHTML"; //importo mi componente HTML
import { Routes } from "react-router-dom";//esto lo escribi yo tambien 
import { RouteRefrenceCss } from "./RouteRefrenceCss";
import { RouteRefrenceJavascript } from "./RouteRefrenceJavascript";

function AsideNavBar() {




  return (
    <>
    <nav className="navbar">
      <ul className="navbar-nav">
        
        <li className="nav-item">
          <DropdownMenu title="Dropdown">
              <a href="" className="dropdown-link">
                link 1
              </a>
              
            <a href="" className="dropdown-link">
              Link 2
            </a>
            <a href="" className="dropdown-link">
              Link 3
            </a>
          </DropdownMenu>
        </li>
    
    


{/*        aqui empieza mi cambio
 */}





<li className="nav-item">
          <DropdownMenu title="Refrence"> 
          <a href="/HTML" className="dropdown-link"> 
          HTML 
          </a>
        
          <a href="/CSS" className="dropdown-link">
             CSS
          </a>
          <a href="/Javascript" className="dropdown-link">
              Javascript
            </a>


      <Routes>
          <Route path="/HTML"  element = {   <RouteRefrenceHTML/>   } />
          <Route path="/CSS"  element = {   <RouteRefrenceCss/>   } />
          <Route path="/Javascript"  element = { <RouteRefrenceJavascript/>   } />

      </Routes>

          </DropdownMenu>
        </li>


              

{/* aqui termina mi cambio */}
{/* voy a aplicarle estilo al componente de refrencee
 */}



      </ul>
    </nav>
    
    </>

  );
}

export default AsideNavBar;

//


              
            
            

              
            
    
    
    
    
    
    
    
