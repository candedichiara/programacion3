import React, { Component } from "react";
import "./PeliculaPopulares.css"

class PeliculaPopulares extends Component {
  constructor(props) {
    super(props);
    this.state = {
        verMas: 'hide'
    };
  }

  verMas() {
   if (this.state.verMas == 'show'){
    this.setState ({
        verMas: 'hide'
    })
   } else {
        this.setState ({
            verMas: 'show'
        })
   }
  }

  render() {
    return (
      <article className="peliculaCard">
        <img src={"https://image.tmdb.org/t/p/original/" + this.props.datosPelicula.poster_path}alt=""/>
        <h2>{this.props.datosPelicula.title} ({this.props.datosPelicula.release_date
        })</h2>
        {
        this.state.verMas 
        ? <p>{this.props.datosPelicula.overview}</p> 
        : <p>{this.props.datosPelicula.overview} [...]</p>
        }
        <a onClick={() => this.masMenosInfo()} href='#'> {this.state.verMas ? "Ver menos" : "Ver mas"} </a>
      </article>
    );
  }
}

export default PeliculaPopulares;