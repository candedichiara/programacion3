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
         reultados: [],
      
      
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
   if (text !== '') 
   fetch (`https://api.themoviedb.org/3/search/multi?${text}api_key=d3bf40c9b6ae8b0603c799bd0fc81e36`)
   .then(resp =>resp.json())
   .then (data => console.log(data))
   .catch (err=> console.log(err))
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
         <h1 className="titulo">Peliculas Más Populares </h1>

         <section className="listadoPeliculas"> 
         {
            this.state.popularMovies.length > 0?
         this.state.popularMovies.map((pelicula, idx)=> <PeliculaPopulares key={pelicula + idx} datosPelicula={pelicula}/>):
         'Cargando'
      }

      <div>
         <Link className="" to='/todasPeliculas' > Ver todas </Link>
      </div>
         </section>
         
         <h1 className="titulo">Series Más Populares</h1>
         <section className="listadoPeliculas"> {
            this.state.popularSeries.length > 0 ?
            this.state.popularSeries.map ((serie, idx) => <Series key={serie + idx} datosPelicula={serie}/>):
            'Cargando'
         }
         <div>
         <Link className="" to='/todasSeries' > Ver todas </Link>
      </div>
         </section>
      </>


   )
}
}
export default Home;