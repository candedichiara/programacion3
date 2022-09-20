import React, { Component } from 'react';
import './SerieDetail.css';

class SerieDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: props.match.params.id,
      datos: {
        genres: []
      },
      favorito: false
    }
  };

  componentDidMount() {

    fetch(`https://api.themoviedb.org/3/tv/${this.state.id}?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36`)
      .then(res => res.json())
      .then(data => this.setState({
        datos: data
      },
        () => console.log(data)
      ))
      .catch(err => console.log(err))

      let storage = localStorage.getItem('favoritosSerie')
      let storageParseado = JSON.parse(storage)
      if(storageParseado !== null){
        let esFavorito = storageParseado.includes(this.state.datos.id) 
        if(esFavorito) {
          this.setState({
            favorito:true
          })
        }
      }

  }

  agregarFavoritos(id){
    let favStorage = localStorage.getItem('favoritosSerie')

    if(favStorage === null){
      let arrayFavoritos = [id]
      let arrayString = JSON.stringify(arrayFavoritos)
      localStorage.setItem('favoritosSerie', arrayString)
    } else {
      let arrayParseado = JSON.parse(favStorage)
      arrayParseado.push(id)
      let arrayString = JSON.stringify(arrayParseado)
      localStorage.setItem('favoritosSerie', arrayString)
    }

    this.setState({
      favorito:true
    })

  }

  removeFavorites(id){
    let arrayFavoritos = localStorage.getItem('favoritosSerie')
    let arrayParseado = JSON.parse(arrayFavoritos) 
    let filtrarStorage = arrayParseado.filter(elm => elm !== id) 

    let storageToString = JSON.stringify(filtrarStorage)

    localStorage.setItem('favoritosSerie', storageToString)

    this.setState({
      favorito: false
    })
  }


  render() {

    return (
      <>


        <h1 className='titulo-serie'>{this.state.datos.name}</h1>

        <section className='detalles'>

          <div>
            <img src={`https://image.tmdb.org/t/p/w342/${this.state.datos.poster_path}`} alt={this.state.datos.name} className='portadaSerie' />
          </div>

          <article className='info'>

            <p className='detalleSerie'>Rating: {this.state.datos.vote_average} </p>

            <p className='detalleSerie'>Fecha de estreno: {this.state.datos.first_air_date} </p>

            <p className='detalleSerie'>Temporadas: {this.state.datos.number_of_seasons}</p>

            <p className='detalleSerie'>{this.state.datos.overview}</p>

            <ul className='detalleSerie'>

              Géneros:
              {
                this.state.datos.genres.map((genero, idx) => <li key={genero.id + idx}>{genero.name}</li>)
              }
            </ul>

            {
              this.state.favorito ?
                <button onClick={() => this.removeFavorites(this.state.datos.id)} className='favbtn'>Sacar de favoritos</button>
                :
                <button onClick={() => this.agregarFavoritos(this.state.datos.id)} className='favbtn'>Añadir a favoritos</button>
            }



          </article>

        </section>



      </>
    )
  }
}


export default SerieDetail