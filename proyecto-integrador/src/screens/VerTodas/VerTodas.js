import React, {Component} from 'react'
import VerTodasCard from '../../components/VerTodasCard/VerTodasCard'


class VerTodas extends Component {
    constructor(props) {
        super (props)
        this.state = {
            peliculas: [],
            nextUrl: '',
            sigPagina: ''
        }
    }

    componentDidMount() {
        fetch ('https://api.themoviedb.org/3/movie/popular?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36')
        .then (res => res.json())
        .then (data => this.setState({
            peliculas: data.results,
            sigPagina: data.page + 1
        }))
        .catch(err => console.log (err))
    }

  mostrarMas() {
    this.setState ({
        sigPagina: this.state.page + 1
    })
    fetch ('https://api.themoviedb.org/3/movie/popular?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36')
    .then (res => res.json())
    .then (data => this.setState ({
        peliculas: this.state.peliculas.concat (data.results),
        sigPagina: data.page + 1
    }))
    .catch (err => console.log(err))
  }
  
  render () {
    return (
        <>
        <section>
            {
                this.state.peliculas.map((pelicula, idx) => <VerTodasCard key={pelicula + idx} datosPelicula={pelicula} />)
            }
        </section>
        <div>
            <button onClick={()=> this.mostrarMas()}>Ver Más</button>
        </div>
        </>
    )
  }
}

export default VerTodas