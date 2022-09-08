/*import React form 'react'

function Home() {
    return (
       <p> Prueba</p>
    )
  }

class Home extends Component{
   constructor(props){
       super(props)
       this.state = {
           key:'d3bf40c9b6ae8b0603c799bd0fc81e36',
           popularMovies:[], //aparecer personajes
           cartelMovies: []
          

       
       }
   }

  componentDidMount ()  {
   //busco datos
    fetch ('https://api.themoviedb.org/3/movie/popular?api_key=' + this.state.key)
    .then (res => res.json())
    .then (data => this.setState ({
      popularMovies: data.results
    }, () => console.log(this.state.popularMovies)
    ))
    .catch (err => console.log (err))

    fetch ('https://api.themoviedb.org/3/movie/now_playing?api_key=' + this.state.key)
    .then (res => res.json())
    .then (data => this.setState({
      cartelMovies: data.results
    }))
    .catch(err => console.log (err))
}

componentDidUpdate(){
    }
    
render () {
   return (
      < >
         <h1 className="titulo">Peliculas Más Populares </h1>
         <section> {this.state.popularMovies.map((pelicula, idx)=> <PeliculaPopulares key={pelicula + idx} datosPelicula/>)
      }
         </section>
         <h1 className="titulo">En cartelera</h1>
         <section> {
            this.state.cartelMovies.map ((cartelMovie, idx) => <Billboard key={cartelMovie + idx} datosPelicula={cartelMovie}/>)
         }
         </section>
      </>


   )
}
export default Home; */