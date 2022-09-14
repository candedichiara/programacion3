import React, {Component} from 'react';
import './SerieDetail.css';

class SerieDetail extends Component {

    constructor(props){
        super(props)
        this.state={
            id: props.match.params.id,
            datos: {
                genres: []
            },
        }
    };

    componentDidMount(){

      fetch (`https://api.themoviedb.org/3/tv/${this.state.id}?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36`)
      .then (res => res.json())
      .then (data => this.setState({
        datos: data
      },
      () => console.log(data)
      ))
      .catch (err => console.log(err)) 


        
    }

  render() {
    
    return (
        <>
        
            <h1 className='tituloDetalle'>Detalle de la serie</h1>
           
                <section className='detalles'>

                    <article className='portadaSerie'>
                        <img src={`https://image.tmdb.org/t/p/w342/${this.state.datos.poster_path}`} alt={this.state.datos.name} className='portadaSerie'/>
                    </article>

                    <article>
                    <h2 className='titulo-serie'>{this.state.datos.name}</h2>
                    </article>

                    <article className='info'>                                         

                        <p className='detalleSerie'>Rating:{this.state.datos.popularity} </p>

                        <p className='detalleSerie'>Fecha de estreno:{this.state.datos.first_air_date} </p>

                        <p className='detalleSerie'>Temporadas: {this.state.datos.number_of_seasons}</p>

                        <p className='detalleSerie'>{this.state.datos.overview}</p>

                        <ul className='detalleSerie'>
                            Géneros: 
                            { 
                              this.state.datos.genres.map((genero, idx) => <li key={genero.id + idx}>{genero.name}</li>)  
                            } 
                        </ul>
                    </article>
                </section>
            
       
        </>
    )
  }
}


export default SerieDetail