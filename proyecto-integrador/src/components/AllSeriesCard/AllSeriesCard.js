import React, {Component} from 'react'
import './AllSeriesCard.css'
//import {Link} from 'react-router-dom'

class AllSeries extends Component {
    constructor (props) {
        super(props);
        this.state = {
            verMas: false
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
            <article className='seriesCard'>
                
                <img src= {`https://image.tmdb.org/t/p/original/` + this.props.datosPelicula.poster_path} alt="" className='imagenesSerie'/>
                <h2 className='tituloSerie'>{this.props.datosPelicula.name}</h2>
                <p className='infoSerie'>Idioma original: {this.props.datosPelicula.original_language}</p>
               {
                this.state.verMas ?
                <p className='infoSerie'>{this.props.datosPelicula.overview}</p>
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

export default AllSeries;