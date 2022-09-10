/*import React, {Component} from 'react';
import './TodasPeliculas.css'

class allMovies extends Component {
    constructor(props) {
        super (props)
        this.state = {
            peliculas: [],
            nextPage: ''
        }
    }

    componentDidMount() {
        fetch ('https://api.themoviedb.org/3/movie/popular?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36')
        .then (res => res.json())
        .then (data => this.setState({
            peliculas: data.results,
            nextPage: data.page + 1
        }))
        .catch (err => console.log(err))
    }

    mostrarMas () {
       fetch ('https://api.themoviedb.org/3/movie/popular?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36')
       .then (res => res.json())
       .then (data => this.setState({
        peliculas: this.state.peliculas.concat (data.results),
        nextPage: data.page + 1
       }))
       .catch (err => console.log(err))
    }

    render(){
        return (
            <>
                <div>
                    <div> 
                        <h1>Todas las películas</h1>
                    </div>
                    <section>
                        {this.state.peliculas.map((pelicula, id)=> <allMoviesCard pelicula={pelicula} key={pelicula + '_' + id}/>)}
                    </section>

                    <div><button onClick={() => this.mostrarMas()}>Ver más</button></div>
                </div>
            </>
        )
    }
}

export default allMovies */