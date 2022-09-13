import React, {Component} from 'react'
import AllMoviesCard from '../../components/AllMoviesCard/AllMoviesCard'


class AllMovies extends Component {
    constructor(props) {
        super (props)
        this.state = {
            peliculas: [],
            limite: 16,
            index:0,
        }
    }

    componentDidMount() {
        fetch (`https://api.themoviedb.org/3/movie/popular?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36&index=${this.state.index}&limit=${this.state.limite}`)
        .then (res => res.json())
        .then (data => this.setState({
            peliculas: data.results,
            index: this.state.limite
        }))
        .catch(err => console.log (err))
    }

  mostrarMas() {
    fetch (`https://api.themoviedb.org/3/movie/popular?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36&index=${this.state.index}&limit=${this.state.limite}`)
    .then (res => res.json())
    .then (data => this.setState ({
        peliculas: this.state.peliculas.concat (data.results),
        index: this.state.index + this.state.limite
        
    }))
    .catch (err => console.log(err))
  }
  
  render () {
    return (
        <>
        <section>
            {
                this.state.peliculas.map((pelicula, idx) => <AllMoviesCard key={pelicula + idx} datosPelicula={pelicula} />)
            }
        </section>
        <div>
            <button onClick={()=> this.mostrarMas()}>Cargar más</button>
        </div>
        </>
    )
  }
}

export default AllMovies