import React, {Component} from 'react'

class FavoritosCard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            verMas: 'hide'
        };
    }
    verMas () {
        if (this.state.verMas === 'show') {
            this.setState ({
                verMas: 'hide'
            })
        } else {
            this.setState ({
                verMas: 'show'
            })
        }
      } 

    render () {
        return (
            <>
            <article className='listadoPelicula'>
                
                <img src= {`https://image.tmdb.org/t/p/original/` + this.props.datosPelicula.poster_path} alt=""/>
                <h2 className='tituloPelicula'>{this.props.datosPelicula.title}</h2>
                <p>Fecha de estreno: {this.props.datosPelicula.release_date}</p>
                {
                    this.state.verMas ?
                    <section >
                    <p>{this.props.datosPelicula.overview}</p>
                   <p onClick={() => this.verMas()}>Ver menos</p>
                   </section>
                   :
                   <p onClick={()=> this.verMas}>Ver más</p>
                }
               
            </article>
            </>
        )
    }
}

export default FavoritosCard;