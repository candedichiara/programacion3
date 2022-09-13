import React, {Component} from 'react'
import AllSeriesCard from '../../components/AllSeriesCard/AllSeriesCard'


class AllSeries extends Component {
    constructor(props) {
        super (props)
        this.state = {
            series: [],
            limite: 16,
            index:0,
        }
    }

    componentDidMount() {
        fetch (`https://api.themoviedb.org/3/tv/popular?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36&index=${this.state.index}&limit=${this.state.limite}`)
        .then (res => res.json())
        .then (data => this.setState({
            series: data.results,
            index: this.state.limite
        }))
        .catch(err => console.log (err))
    }

  mostrarMas() {
    fetch (`https://api.themoviedb.org/3/tv/popular?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36&index=${this.state.index}&limit=${this.state.limite}`)
    .then (res => res.json())
    .then (data => this.setState ({
        series: this.state.series.concat (data.results),
        index: this.state.index + this.state.limite
        
    }))
    .catch (err => console.log(err))
  }
  
  render () {
    return (
        <>
        <section>
            {
                this.state.series.map((serie, idx) => <AllSeriesCard key={serie + idx} datosPelicula={serie} />)
            }
        </section>
        <div>
            <button onClick={()=> this.mostrarMas()}>Cargar más</button>
        </div>
        </>
    )
  }
}

export default AllSeries