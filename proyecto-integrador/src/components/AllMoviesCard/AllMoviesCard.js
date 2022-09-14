import React, {Component} from 'react'
import './AllMoviesCard.css'
//import {Link} from 'react-router-dom'

class AllMovies extends Component {
    constructor (props) {
        super(props);
        this.state = {
            verMas: false
           /* limit: 10,
            index: 0
            limit: 10,
            index: 0
            //en el primer fetch en la ruta al endpoint en la query paso this.state.index y paso limit={this.state.limit}
            lo que me trae el primer fetch lo guardo en state --> data []
            para el método que se encarga de cargar más  */
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

    render () {
        return (
            <>
            <article className='peliculasCard'>
                
                <img src= {`https://image.tmdb.org/t/p/original/` + this.props.datosPelicula.poster_path} alt="" className='imagenesPeliculas'/>
                <h2 className='tituloPeliculas'>{this.props.datosPelicula.title}</h2>
                <p className='infoPeliculas'>Fecha de estreno: {this.props.datosPelicula.release_date}</p>
                {
                this.state.verMas ?
                <p className='infoPeliculas'>{this.props.datosPelicula.overview}</p>
                :""
               }
                {
             this.state.verMas ?

             <button onClick={()=>this.verMas()}>Ver menos</button>
   
             :
   
             <button onClick={()=>this.verMas()}>Ver más</button> 
            }
               
            </article>
            </>
        )
    }
}

export default AllMovies;