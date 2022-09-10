import React, {Component} from 'react';
import './MovieDetail.css';

class MovieDetail extends Component {

    constructor(props){
        super(props)
        this.state={
            id: (props.match.params.id),
            movieData: {
                genres: []
            },
        }
    };

    componentDidMount(){
      fetch (`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36`)
      .then (res => res.json())
      .then (datosPeliculas => this.setState({
        movieData: datosPeliculas
      },
      () => console.log(datosPeliculas)
      ))
      .catch (err => console.log(err)) 


        
    }

  render() {
    
    return (
        <>
        
            <h1>Detalle de película</h1>
           
                <section>
                    <article>
                        <h2>{this.state.movieData.title}</h2>
                    </article>

                    <article>

                        <img src={`https://image.tmdb.org/t/p/w342/${this.state.movieData.poster_path}`} alt={this.state.movieData.title}/>
                    </article>
                    <article>                     

                        <p>Rating:{this.state.movieData.popularity} </p>

                        <p>Fecha de estreno:{this.state.movieData.release_date} </p>

                        <p>Duración: {this.state.movieData.runtime}</p>

                        <p>{this.state.movieData.overview}</p>

                        <ul>
                            Géneros: {
                              this.state.movieData.genres.map((genero, i) => <li>{genero.name}</li>)  
                            }
                        </ul>
                    </article>
                </section>
            
       
        </>
    )
  }
}


export default MovieDetail