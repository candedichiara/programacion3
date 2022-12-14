import React, { Component } from 'react'
import "./BuscadorEspecial.css"

class BuscadorEspecial extends Component {
    constructor(props){
        super(props)
        this.state = {
            valorInput: ''
        }
    }

    prevenirRefresh(event){
        event.preventDefault()
    }

    actualizarEstadoInput(event){
        this.setState({
            valorInput: event.target.value
        }, () => this.props.buscador(this.state.valorInput))
    }

    render() {
        return (
            <form onSubmit={(event)=> this.prevenirRefresh(event)} className="buscadorE">
                <input type='text' onChange={(event)=> this.actualizarEstadoInput(event)} value={this.state.valorInput} placeholder='Busca peliculas o series'/> 
            </form>
        )
    }
}

export default BuscadorEspecial