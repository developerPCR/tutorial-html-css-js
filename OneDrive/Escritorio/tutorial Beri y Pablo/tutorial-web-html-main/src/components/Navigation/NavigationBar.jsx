import './NavigationBar.css'


const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li>
          <a href="#">Productos</a>
          <ul>
            <li><a href="#">Producto 1</a></li>
            <li><a href="#">Producto 2</a></li>
            <li><a href="#">Producto 3</a></li>
          </ul>
        </li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>

  )
}

export default NavigationBar
