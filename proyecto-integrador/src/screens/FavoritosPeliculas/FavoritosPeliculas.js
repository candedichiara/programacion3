import React, {Component} from 'react'
import FavoritosPelisCard from '../../components/FavoritosPelisCard/FavoritosPelisCard'
import './FavoritosPeliculas.css'


class FavoritosPeliculas extends Component{
    constructor(props){
        super(props)
        this.state={
            peliculas:[]
        }
    }
    componentDidMount(){
        let storage = localStorage.getItem('favoritos')
        if(storage!== null){
            let storageParseado = JSON.parse(storage)
            
            Promise.all(
                storageParseado.map(elm =>{
                    return(
                        fetch(`https://api.themoviedb.org/3/movie/${elm}?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36`)
                        .then(resp => resp.json())
                        .then(data => data))
                    
                })
            )
            .then(data => 
                this.setState({
                    peliculas: data
                })
            )
        }
    }
    removeFavorites(id){
        let arrayFavoritos = localStorage.getItem('favoritos')
        let arrayParseado = JSON.parse(arrayFavoritos) 
        let filtrarStorage = arrayParseado.filter(elm => elm !== id) 
    
        let storageToString = JSON.stringify(filtrarStorage)
    
        localStorage.setItem('favoritos', storageToString)

        let filtrado = this.state.peliculas.filter(elm => elm.id !== id)

        this.setState({
        favorito: false,
        peliculas: filtrado
        })
    }
    
    render(){
        return(
            <div className='listadoFavoritos'>
                {
                    this.state.peliculas.length > 0 ?
                    this.state.peliculas.map((elm, idx) => <FavoritosPelisCard removeFavorites={(id)=>this.removeFavorites(id)} key={idx + elm} datosPelicula={elm}/>)
                    : <img src='./images/carga.gif' alt='cargando'/>
                }
            </div>
        )
    }
}

export default FavoritosPeliculas