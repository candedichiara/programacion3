import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './FavoritosPelis.css'

class FavoritosPelisCard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            verMas: false,
            favorito:true
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
                
                <img src= {`https://image.tmdb.org/t/p/original/` + this.props.datosPelicula.poster_path} alt="" className='portadaPelis'/>
                <h2 className='titulo'>{this.props.datosPelicula.title}</h2>
                <p className='estreno'>Fecha de estreno: {this.props.datosPelicula.release_date}</p>
                
                {
                    this.state.verMas ? 
                    <p>{this.props.datosPelicula.overview}</p> 
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

                <button className="botonDetalle"><Link to={`/detalle/${this.props.datosPelicula.id}`} className='linkDetalle'>Ver detalle</Link></button>
                </article>

               
            </article>
            </>
        )
    }
}

export default FavoritosPelisCard;