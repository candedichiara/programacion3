import React, {Component} from 'react'
import AllMoviesCard from '../../components/AllMoviesCard/AllMoviesCard'
import './AllMovies.css'
import Search from '../../components/Search/Search'

class AllMovies extends Component {
    constructor(props) {
        super (props)
        this.state = {
            peliculas: [],
            page: 2,
            backupPopulares: [],        
        
        }
    }

    componentDidMount() {
        fetch ('https://api.themoviedb.org/3/movie/popular?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36&language=en-US&page=1')
        .then (res => res.json())
        .then (data => this.setState({
            peliculas: data.results,
            backupPopulares: data.results,
            
        }))
        .catch(err => console.log (err))
    }
    mostrarMas() {
        this.setState ({
            page: this.state.page + 1
        })
        fetch ('https://api.themoviedb.org/3/movie/popular?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36&language=en-US&page=' + this.state.page)
        .then (res => res.json())
        .then (data => this.setState ({
            peliculas: this.state.peliculas.concat(data.results),
            backupPopulares: this.state.backupPopulares.concat(data.results)
            
            
            
        }))
        .catch (err => console.log(err))
      }

    metodoFiltrar(name){
        let arrayFiltrado = this.state.backupPopulares.filter((elm) => elm.title.toLowerCase().includes(name.toLowerCase()) )
        this.setState({
        peliculas: arrayFiltrado
        })
    }


  
  
  render () {
    return (
        <>
        <Search filtrar={(name) => this.metodoFiltrar(name) } />
        <section className='listadoPeliculas'>
            {
                this.state.peliculas.length > 0 ?
                this.state.peliculas.map((pelicula, idx) => <AllMoviesCard key={pelicula + idx} datosPelicula={pelicula} />)
                : <img src='./images/loading.gif' alt='cargando'/>
            }
        </section>
        <div>
            <button onClick={()=> this.mostrarMas()} className='cargarbtn'>Cargar más</button>
        </div>
        </>
    )
  }
}

export default AllMovies