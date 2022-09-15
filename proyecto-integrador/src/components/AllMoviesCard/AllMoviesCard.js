import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './AllMoviesCard.css'

class AllMovies extends Component {
    constructor (props) {
        super(props);
        this.state = {
            verMas: false,
            favorito: false
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
             this.state.favorito ?
             <button onClick={()=> this.removeFavorites(this.props.datosPelicula.id) } className='favbtn'>Sacar de favoritos</button>
              :
            <button onClick={()=> this.agregarFavoritos(this.props.datosPelicula.id) } className='favbtn'>Añadir a favoritos</button>
            }




                {
             this.state.verMas ?

             <button onClick={()=>this.verMas()}>Ver menos</button>
   
             :
   
             <button onClick={()=>this.verMas()}>Ver más</button> 
            }

<button className="botonDetalle"><Link to={`/detalle/${this.props.datosPelicula.id}`} className='detallebtn'>Ver detalle</Link></button>
               
            </article>
            </>
        )
    }
}

export default AllMovies;