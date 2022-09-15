import React, {Component} from 'react'
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

         <button onClick={()=> this.removeFavorites(this.props.datosPelicula.id) }>Sacar de favoritos</button>
                
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

export default FavoritosPelisCard;