import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./Series.css" 

class Series extends Component {
  constructor(props) {
    super(props);
    this.state = {
        verMas: false,
        favorito: false
    };
    
  }
  verMas () {
    if (this.state.verMas) {
        this.setState ({
            verMas: false
        })
    } else {
        this.setState ({
            verMas: true
        })
    }
  }



  componentDidMount(){
    let storage = localStorage.getItem('favoritos')
    let storageParseado = JSON.parse(storage)
    if(storageParseado !== null){
      let esFavorito = storageParseado.includes(this.props.datosPelicula.id) 
      if(esFavorito) {
        this.setState({
          favorito:true
        })
      }
    }
  }

 


  agregarFavoritos(id){
    let favStorage = localStorage.getItem('favoritos')

    if(favStorage === null){
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
      favorito:true
    })

  }

  removeFavorites(id){
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
      <article className="serieCard">
        <img src={`https://image.tmdb.org/t/p/w342/${this.props.datosPelicula.poster_path}`}alt="Cartel serie" className="imagenesSeries"/>
        <h2 className="tituloSerie">{this.props.datosPelicula.name}</h2>        
        <p className="tituloSerie">Fecha de emisión: {this.props.datosPelicula.first_air_date}</p> 



        {
        this.state.verMas 
        ? <p className="overview">{this.props.datosPelicula.overview}</p> 
        : ""
        }
            <article className="botones">
            {
              this.state.favorito
              ?
                <button onClick={()=> this.removeFavorites(this.props.datosPelicula.id) } className='favbtn'>Sacar de favoritos</button>
              :
                <button onClick={()=> this.agregarFavoritos(this.props.datosPelicula.id) } className='favbtn'>Añadir a favoritos</button>
            }
            {
             this.state.verMas ?

             <button onClick={()=>this.verMas()} className="botonVer">Ver menos</button>
   
             :
   
             <button onClick={()=>this.verMas()} className="botonVer">Ver más</button> 
            }
            <button className="botonDetalle"><Link to={`/detalleSerie/${this.props.datosPelicula.id}`} className='linkDetalle'>Ver detalle</Link></button> 
            </article>

      
      </article>
    );
  }
}

export default Series;