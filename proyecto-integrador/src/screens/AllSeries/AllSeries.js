import React, {Component} from 'react'
import AllSeriesCard from '../../components/AllSeriesCard/AllSeriesCard'
import Search from '../../components/Search/Search'
import './AllSeries.css'

class AllSeries extends Component {
    constructor(props) {
        super (props)
        this.state = {
            series: [],
            backupSeries: [], 
            page: 2   
        }
    }

    componentDidMount() {
        fetch ('https://api.themoviedb.org/3/tv/popular?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36&language=en-US&page=1')
        .then (res => res.json())
        .then (data => this.setState({
            series: data.results,
            backupSeries: data.results,
            
        }))
        .catch(err => console.log (err))
    }

    mostrarMas() {
        this.setState ({
            page: this.state.page + 1
        })
        fetch ('https://api.themoviedb.org/3/tv/popular?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36&language=en-US&page=' + this.state.page)
        .then (res => res.json())
        .then (data => this.setState ({
            series: this.state.series.concat(data.results),
            backupSeries: this.state.backupSeries.concat(data.results)
            
        }))
        .catch (err => console.log(err))
    }

    metodoFiltrar(name){
        let arrayFiltrado = this.state.backupSeries.filter((elm) => elm.name.toLowerCase().includes(name.toLowerCase()) )
        this.setState({
        series: arrayFiltrado
        })
    }


  
  render () {
    return (
        <>
        <Search filtrar={(name) => this.metodoFiltrar(name) }/>
        <section className='listadoSeries'>
            {
                this.state.series.length > 0?
                this.state.series.map((serie, idx) => <AllSeriesCard key={serie + idx} datosPelicula={serie} />)
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

export default AllSeries