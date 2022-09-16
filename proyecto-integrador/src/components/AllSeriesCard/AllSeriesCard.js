import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './AllSeriesCard.css'

class AllSeries extends Component {
    constructor (props) {
        super(props);
        this.state = {
            verMas: false,
            favoritos: false
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
        let storage = localStorage.getItem('favoritosSerie')
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
        let favStorage = localStorage.getItem('favoritosSerie')
    
        if(favStorage === null){
          let arrayFavoritos = [id]
          let arrayString = JSON.stringify(arrayFavoritos)
          localStorage.setItem('favoritosSerie', arrayString)
        } else {
          let arrayParseado = JSON.parse(favStorage)
          arrayParseado.push(id)
          let arrayString = JSON.stringify(arrayParseado)
          localStorage.setItem('favoritosSerie', arrayString)
        }
    
        this.setState({
          favorito:true
        })
    
      }
    
      removeFavorites(id){
        let arrayFavoritos = localStorage.getItem('favoritosSerie')
        let arrayParseado = JSON.parse(arrayFavoritos) 
        let filtrarStorage = arrayParseado.filter(elm => elm !== id) 
    
        let storageToString = JSON.stringify(filtrarStorage)
    
        localStorage.setItem('favoritosSerie', storageToString)
    
        this.setState({
          favorito: false
        })
      }
    

    render () {
        return (
            <>
            <article className='seriesCard'>
                
                <img src= {`https://image.tmdb.org/t/p/original/` + this.props.datosPelicula.poster_path} alt="" className='imagenesSerie' />
                <h2 className='tituloSerie'>{this.props.datosPelicula.name}</h2>
                <p className='infoSerie'>Idioma original: {this.props.datosPelicula.original_language}</p>
               {
                this.state.verMas ?
                <p className='infoSerie'>{this.props.datosPelicula.overview}</p>
                :""
               }
            
              <article className='botones'>
              {
                this.state.favorito ?
                <button onClick={()=> this.removeFavorites(this.props.datosPelicula.id) } className='favbtn'>Sacar de favoritos</button>
                :
                <button onClick={()=> this.agregarFavoritos(this.props.datosPelicula.id) } className='favbtn'>Añadir a favoritos</button>
               }


              {
                this.state.verMas ?

                <button onClick={()=>this.verMas()} className='botonVer'>Ver menos</button>
   
                :
   
                <button onClick={()=>this.verMas()} className='botonVer'>Ver más</button> 
              }
              <button className="botonDetalle"><Link to={`/detalleSerie/${this.props.datosPelicula.id}`} className='linkDetalle'>Ver detalle</Link></button>
              </article>
               
            </article>
            </>
        )
    }
}

export default AllSeries;