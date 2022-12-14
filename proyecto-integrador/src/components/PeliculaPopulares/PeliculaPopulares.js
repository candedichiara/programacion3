import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./PeliculaPopulares.css"

class PeliculaPopulares extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verMas: false,
      favorito: false
    };
  }

  verMas() {
    if (this.state.verMas) {
      this.setState({
        verMas: false
      })
    } else {
      this.setState({
        verMas: true
      })
    }
  }


  componentDidMount() {
    let storage = localStorage.getItem('favoritos')
    let storageParseado = JSON.parse(storage)
    if (storageParseado !== null) {
      let esFavorito = storageParseado.includes(this.props.datosPelicula.id)
      if (esFavorito) {
        this.setState({
          favorito: true
        })
      }
    }
  }


  agregarFavoritos(id) {
    let favStorage = localStorage.getItem('favoritos')

    if (favStorage === null) {
      let arrayFavoritos = [id]
      let arrayString = JSON.stringify(arrayFavoritos)
      localStorage.setItem('favoritos', arrayString)
    } else {
      let arrayParseado = JSON.parse(favStorage)
      arrayParseado.push(id)
      let arrayString = JSON.stringify(arrayParseado)
      localStorage.setItem('favoritos', arrayString)
    }

    this.setState({
      favorito: true
    })

  }

  removeFavorites(id) {
    let arrayFavoritos = localStorage.getItem('favoritos')
    let arrayParseado = JSON.parse(arrayFavoritos)
    let filtrarStorage = arrayParseado.filter(elm => elm !== id)

    let storageToString = JSON.stringify(filtrarStorage)

    localStorage.setItem('favoritos', storageToString)

    this.setState({
      favorito: false
    })
  }


  render() {
    return (
      <article className="peliculaCard">
        <img src={"https://image.tmdb.org/t/p/original/" + this.props.datosPelicula.poster_path} alt="{this.props.datosPelicula.title}" className="imagenesPelis" />
        <h2 className="tituloPelicula" >{this.props.datosPelicula.title} </h2>

        <h3 className="tituloPelicula">({this.props.datosPelicula.release_date})</h3>

        {
          this.state.verMas ?
            <p className="overview">{this.props.datosPelicula.overview}</p>
            :
            ""
        }

        <article className="botones">



          {
            this.state.favorito ?
              <button onClick={() => this.removeFavorites(this.props.datosPelicula.id)} className='favbtn'>Sacar de favoritos</button>
              :
              <button onClick={() => this.agregarFavoritos(this.props.datosPelicula.id)} className='favbtn'>A??adir a favoritos</button>
          }

          {
            this.state.verMas ?

              <button onClick={() => this.verMas()} className="botonVer">Ver menos</button>

              :

              <button onClick={() => this.verMas()} className="botonVer">Ver m??s</button>
          }

          <button className="botonDetalle"><Link to={`/detalle/${this.props.datosPelicula.id}`} className="linkDetalle">Ver detalle</Link></button>
        </article>

      </article>
    );
  }
}

export default PeliculaPopulares;