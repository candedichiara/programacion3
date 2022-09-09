import React, {Component} from 'react'

class Favoritos extends Component{
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

    render(){
        return(
            <h1>
                Tus peliculas favoritas
            </h1>
        )
    }
}

export default Favoritos