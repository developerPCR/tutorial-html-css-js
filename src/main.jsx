import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AsideNavBar from './components/asideMenu/AsideNavBar'
import NavigationBar from './components/Navigation/NavigationBar'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {<NavigationBar/>}
    <AsideNavBar/>
    <App />
  </React.StrictMode>,
)
