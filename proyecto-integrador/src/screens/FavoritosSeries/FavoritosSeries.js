import React, {Component} from 'react'
import FavoritosSeriesCard from '../../components/FavoritosSeriesCard/FavoritosSeriesCard'
import './FavoritosSeries.css'


class FavoritosSeries extends Component{
    constructor(props){
        super(props)
        this.state={
            series:[]
        }
    }
    componentDidMount(){
        let storage = localStorage.getItem('favoritosSerie')
        if(storage!== null){
            let storageParseado = JSON.parse(storage)
            
            Promise.all(
                storageParseado.map(elm =>{
                    return(
                        fetch(`https://api.themoviedb.org/3/tv/${elm}?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36`)
                        .then(resp => resp.json())
                        .then(data => data))
                    
                })
            )
            .then(data => 
                this.setState({
                    series: data
                })
            )
        }
    }

    removeFavorites(id){
        let arrayFavoritos = localStorage.getItem('favoritosSerie')
        let arrayParseado = JSON.parse(arrayFavoritos) 
        let filtrarStorage = arrayParseado.filter(elm => elm !== id) 
    
        let storageToString = JSON.stringify(filtrarStorage)
    
        localStorage.setItem('favoritosSerie', storageToString)

        let filtrado = this.state.series.filter(elm => elm.id !== id)

        this.setState({
        favorito: false,
        series: filtrado
        })
    }

    render(){
        return(
            <div className='listadoFavoritos'>
                {
                    this.state.series.length > 0 ?
                    this.state.series.map((elm, idx) => <FavoritosSeriesCard removeFavorites={(id)=>this.removeFavorites(id)} key={idx + elm} datosPelicula={elm}/>)
                    : <img src='./images/loading.gif' alt='cargando'/>
                }
            </div>
        )
    }
}

export default FavoritosSeries