import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' //lo hice yo 
import App from './App'
import AsideNavBar from './components/asideMenu/AsideNavBar'
import NavigationBar from './components/Navigation/NavigationBar'
import './index.css'




ReactDOM.createRoot(document.getElementById('root')).render(


  <BrowserRouter>
  
  <React.StrictMode>
    {<NavigationBar/>}
    <AsideNavBar/>
    <App />

  </React.StrictMode>
  
  
  </BrowserRouter>
  
)




