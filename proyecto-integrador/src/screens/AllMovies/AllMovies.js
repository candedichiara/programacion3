import React, {Component} from 'react'
import AllMoviesCard from '../../components/AllMoviesCard/AllMoviesCard'
import './AllMovies.css'
import Search from '../../components/Search/Search'

class AllMovies extends Component {
    constructor(props) {
        super (props)
        this.state = {
            peliculas: [],
            limite: 16,
            index: 0, 
            backupPopulares: [],        
        
        }
    }

    componentDidMount() {
        fetch (`https://api.themoviedb.org/3/movie/popular?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36&index=${this.state.index}&limit=${this.state.limite}`)
        .then (res => res.json())
        .then (data => this.setState({
            peliculas: data.results,
            backupPopulares: data.results,
            index: this.state.limite
        }))
        .catch(err => console.log (err))
    }

    metodoFiltrar(name){
        let arrayFiltrado = this.state.backupPopulares.filter((elm) => elm.title.toLowerCase().includes(name.toLowerCase()) )
        this.setState({
        peliculas: arrayFiltrado
        })
    }


  mostrarMas() {
    fetch (`https://api.themoviedb.org/3/movie/now_playing?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36&index=${this.state.index}&limit=${this.state.index.limite}`)
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
        <Search filtrar={(name) => this.metodoFiltrar(name) } />
        <section className='listadoPeliculas'>
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