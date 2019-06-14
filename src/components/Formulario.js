import React, { Component } from "react";
import { CategoriasConsumer } from "../context/CategoriasContext"; //se importa el consumer para acceder a los datos que se envían por el provider
import { EventosConsumer } from "../context/EventosContext";

export default class Formulario extends Component {
  state = {
    nombre: "",
    categoria: ""
  };

  obtenerDatosEvento = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <EventosConsumer>
        {value => {
          //recibe el value del provider de eventos, el cual tiene una función para obtener eventos según lo que se busque(state)

          return (
            <form
              onSubmit={e => {
                e.preventDefault();
                value.obtenerEventos(this.state);
              }}
            >
              <fieldset className="uk-fieldset uk-margin">
                <legend className="uk-legend uk-text-center">
                  Busca tu evento por Nombre o Categoría
                </legend>
              </fieldset>
              <div className="uk-column-1-3@m uk-margin">
                <div className="uk-margin" uk-margin="true">
                  <input
                    name="nombre"
                    className="uk-input"
                    type="text"
                    placeholder="Nombre de Evento o Ciudad"
                    onChange={this.obtenerDatosEvento}
                  />
                </div>
                <div className="uk-margin" uk-margin="true">
                  <select
                    className="uk-select"
                    name="categoria"
                    onChange={this.obtenerDatosEvento}
                  >
                    <option value="">--Selecciona Categoria--</option>
                    <CategoriasConsumer>
                      {value => {
                        // los datos se enviaron como value desde el provider
                        return value.categorias.map(categoria => (
                          <option
                            key={categoria.id}
                            value={categoria.id}
                            data-uk-form-select
                          >
                            {categoria.name_localized}
                          </option>
                        ));
                      }}
                    </CategoriasConsumer>
                  </select>
                </div>
                <div>
                  <input
                    type="submit"
                    className="uk-button uk-button-danger"
                    value="Buscar Eventos"
                  />
                </div>
              </div>
            </form>
          );
        }}
      </EventosConsumer>
    );
  }
}
