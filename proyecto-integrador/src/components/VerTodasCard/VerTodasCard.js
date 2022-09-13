import React, {Component} from 'react'
import './VerTodas.css'
//import {Link} from 'react-router-dom'

class VerTodasCard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            verMas: 'hide',
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
        if (this.state.verMas === 'show') {
            this.setState ({
                verMas: 'hide'
            })
        } else {
            this.setState ({
                verMas: 'show'
            })
        }
      } 

    render () {
        return (
            <>
            <article className='listadoPelicula'>
                
                <img src= {`https://image.tmdb.org/t/p/original/` + this.props.datosPelicula.poster_path} alt=""/>
                <h2 className='tituloPelicula'>{this.props.datosPelicula.title}</h2>
                <p>Fecha de estreno: {this.props.datosPelicula.release_date}</p>
                {
                    this.state.verMas ?
                    <section >
                    <p>{this.props.datosPelicula.overview}</p>
                   <p onClick={() => this.verMas()}>Ver menos</p>
                   </section>
                   :
                   <p onClick={()=> this.verMas}>Ver más</p>
                }
               
            </article>
            </>
        )
    }
}

export default VerTodasCard; 