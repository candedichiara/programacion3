import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './FavoritosSeries.css'

class FavoritosSeriesCard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            verMas: false,
            favorito:true,
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
            <article className='favoritoCard'>
                
                <img src= {`https://image.tmdb.org/t/p/original/` + this.props.datosPelicula.poster_path} alt="" className='portadaSeries'/>
                <h2 className='tituloFavorito'>{this.props.datosPelicula.name}</h2>
                <p className='estreno'>Fecha de estreno: {this.props.datosPelicula.first_air_date}</p>
                
                {
                    this.state.verMas ? 
                    <p className="infoFav">{this.props.datosPelicula.overview}</p> 
                    : 
                    ""
                }

                <article className='botones'>

                <button onClick={()=> this.props.removeFavorites(this.props.datosPelicula.id) } className="favbtn">Sacar de favoritos</button>
                
                {
                    this.state.verMas ?
                    <section >
                    
                   <button onClick={() => this.verMas()} className="botonVer">Ver menos</button>
                   </section>
                   :
                   <button onClick={()=> this.verMas()} className="botonVer">Ver más</button>
                   
                }

                <button className="botonDetalle"><Link to={`/detalleSerie/${this.props.datosPelicula.id}`} className='linkDetalle'>Ver detalle</Link></button>
            </article>
               
            </article>
            </>
        )
    }
}

export default FavoritosSeriesCard;