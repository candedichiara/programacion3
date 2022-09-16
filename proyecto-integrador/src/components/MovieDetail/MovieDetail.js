import React, { Component } from 'react';
import './MovieDetail.css';

class MovieDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: props.match.params.id,
      datos: {
        genres: []
      },
    }
  };

  componentDidMount() {

    fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36`)
      .then(res => res.json())
      .then(data => this.setState({
        datos: data,
      },
        () => console.log(data)
      ))
      .catch(err => console.log(err))



  }

  render() {

    return (
      <>

        <h1 className='titulo-pelicula'>{this.state.datos.title}</h1>

        <section className='detalles'>

          <div>

            <img src={`https://image.tmdb.org/t/p/w342/${this.state.datos.poster_path}`} alt={this.state.datos.title} className='portadaPelicula' />

          </div>

          <article>

          </article>

          <article className='info'>

            <p className='detallePelicula'>Rating: {this.state.datos.vote_average} </p>

            <p className='detallePelicula'>Fecha de estreno: {this.state.datos.release_date} </p>

            <p className='detallePelicula'>Duración: {this.state.datos.runtime} minutos</p>

            <p className='detallePelicula'>{this.state.datos.overview}</p>

            <ul className='detallePelicula'>

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


export default MovieDetail