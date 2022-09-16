import React, { Component } from 'react'
import PeliculaPopulares from '../../components/PeliculaPopulares/PeliculaPopulares'
import Series from '../../components/Series/Series'
import "./Home.css"
import {Link} from 'react-router-dom'
import BuscadorEspecial from '../../components/BuscadorEspecial/BuscadorEspecial'


class Home extends Component{
   constructor(props){
      super(props)
      this.state = {
         //key:'d3bf40c9b6ae8b0603c799bd0fc81e36',
         popularMovies:[], //aparecer personajes
         popularSeries: [],
        // backupPopulares: [],
         resultados: [],
      
      
      }
   }

componentDidMount(){
   
   fetch ('https://api.themoviedb.org/3/movie/popular?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36&limit=10')
   .then (res => res.json())
   .then (data => this.setState ({
      popularMovies: data.results,
      backupPopulares: data.results,
   }, () => console.log(this.state.popularMovies)
   ))
   .catch (err => console.log (err))

   fetch ('https://api.themoviedb.org/3/tv/popular?api_key=d3bf40c9b6ae8b0603c799bd0fc81e36&limit=10')
   .then (res => res.json())
   .then (data => this.setState({
      popularSeries: data.results
   }))
   .catch(err => console.log (err))
}

buscador(text){
   if (text !== '') {
   fetch (`https://api.themoviedb.org/3/search/multi?query=${text}&api_key=d3bf40c9b6ae8b0603c799bd0fc81e36`)
   .then(resp =>resp.json())
   .then (data => this.setState({
      resultados: data.results
   }))
   .catch (err=> console.log(err))
   } else {
      this.setState ({
         resultados: []
      })
   }
} 

metodoFiltrar(name){
   let arrayFiltrado = this.state.backupPopulares.filter((elm) => elm.title.toLowerCase().includes(name.toLowerCase()) )
   this.setState({
      popularMovies: arrayFiltrado
   })
}

   
render(){
   return (
      < >
      < BuscadorEspecial buscador={(text)=>this.buscador(text)}/>
      {
            this.state.resultados.length > 0 ?
            this.state.resultados.map((elm, idx) => 
            /*<section className="listadoPeliculasBuscador">
               <article className='peliculaCardBuscador'>
                  <img src={'https://image.tmdb.org/t/p/original/' + elm.poster_path} className="imagenesPelis" alt=''/>
                  <h2 className="tituloPelicula">{elm.original_title} {elm.original_name}</h2>
                  <h3 className="tituloPelicula"> {elm.release_date} {elm.first_air_date}</h3>
                  <p className='tituloPelicula'>{elm.media_type}</p>
               </article>
            </section>*/
            <PeliculaPopulares key={elm + idx} datosPelicula={elm}/>
            )
         :
         <>
         <h1 className="tituloHome">Peliculas Más Populares </h1>

         <section className="listadoPeliculas"> 
         {
            this.state.popularMovies.length > 0?
            this.state.popularMovies.map((pelicula, idx)=> <PeliculaPopulares key={pelicula + idx} datosPelicula={pelicula}/>):
            <img src='./images/carga.gif' alt='cargando'/>
         }

            <div>
               <Link className="verTodas" to='/todasPeliculas' > Ver todas </Link>
            </div>
         </section>

         <h1 className="tituloHome">Series Más Populares</h1>
         <section className="listadoPeliculas"> 
            {
            this.state.popularSeries.length > 0 ?
            this.state.popularSeries.map ((serie, idx) => <Series key={serie + idx} datosPelicula={serie}/>):
            <img src='./images/carga.gif' alt='cargando'/>
            }
            <div>
               < Link className="verTodas" to='/todasSeries' > Ver todas </Link>
            </div>
         </section>
         </>
      }
         
      </>


   )
}
}
export default Home;