import React from 'react'
import {Link} from 'react-router-dom'
import './styles.css'

function Header() {
  return (
    <React.Fragment>
    <nav className="nav">
      <img src="/images/logo.png" alt="logo" className="logo"/>
        <ul className="opciones">
          <li className="opciones">
            <Link to='/'>Home</Link>
          </li>
          <li className="opciones">
            <Link to='/favoritos'>Favoritos</Link>
          </li>
          <li className="opciones">
           <Link to='/todasPeliculas'>Peliculas</Link>
          </li>
          <li className="opciones">
           <Link to='/todasSeries'>Series</Link>
          </li>

         

        </ul>

      </nav>

    

    </React.Fragment>
     
  )
}

export default Header
