import React, {Component} from 'react'
import './Favoritos.css'

class FavoritosCard extends Component {
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
                
                
                
                {
                    this.state.verMas ?
                    <section >
                    
                   <button onClick={() => this.verMas()}>Ver menos</button>
                   </section>
                   :
                   <button onClick={()=> this.verMas()}>Ver más</button>
                   
                }
               
            </article>
            </>
        )
    }
}

export default FavoritosCard;