import React, { Component } from 'react'
import axios from 'axios'

const CategoriasContext = React.createContext()//se crea el context
export const CategoriasConsumer = CategoriasContext.Consumer//este es el consumer y hay que importarlo siempre que se quiera acceder a los datos que se envían por el provider

export default class CategoriasProvider extends Component {
    token = 'OZD7AJB4KVDNTQI6JLT3'
    state ={
        categorias:[]
    }
    componentDidMount() {
        this.obtenerCategorias()
    }

    obtenerCategorias= async ()=>{ //obtener categorias y setearlas en el state
        let url =`https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`
        let categorias = await axios.get(url)

        //console.log(categorias.data.categories)
        this.setState({
            categorias:categorias.data.categories
        })
    }
    
    render() {
        return (//se envuelven los children con el provider y se pasan las categorias como value
            <CategoriasContext.Provider
                value={{
                    categorias:this.state.categorias
                }}
            >
                {this.props.children}
            </CategoriasContext.Provider>
        )
    }
}
