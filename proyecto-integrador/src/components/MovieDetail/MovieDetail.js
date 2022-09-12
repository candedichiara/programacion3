import React, {Component} from 'react';
import './MovieDetail.css';

class MovieDetail extends Component {

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

      fetch (`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36`)
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
        
            <h1>Detalle de película</h1>
           
                <section>
                    <article>
                        <h2>{this.state.datos.title}</h2>
                    </article>

                    <article>

                        <img src={`https://image.tmdb.org/t/p/w342/${this.state.datos.poster_path}`} alt={this.state.datos.title}/>
                    </article>
                    <article>                     

                        <p>Rating:{this.state.datos.popularity} </p>

                        <p>Fecha de estreno:{this.state.datos.release_date} </p>

                        <p>Duración: {this.state.datos.runtime}</p>

                        <p>{this.state.datos.overview}</p>

                        <ul>
                            {/* Géneros: {
                              this.state.datos.genres.map((genero, idx) => <li>{genero.name + idx}</li>)  
                            } */}
                        </ul>
                    </article>
                </section>
            
       
        </>
    )
  }
}


export default MovieDetail